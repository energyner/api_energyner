async function calcularConsumoEnergetico(potencia, horas) {
    const response = await fetch('http://localhost:3002/api/consumo-energetico', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ potencia, horas })
    });
    const data = await response.json();
    console.log('Consumo Energético:', data.consumo_energetico);
    document.getElementById('resultadoConsumo').innerText = `Consumo Energético: ${data.consumo_energetico}`;
}

async function calcularProduccionSolar(area, irradiacion, eficiencia) {
    const response = await fetch('http://localhost:3002/api/produccion-solar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ area, irradiacion, eficiencia })
    });
    const data = await response.json();
    console.log('Producción Solar:', data.produccion_solar);
    document.getElementById('resultadoSolar').innerText = `Producción Solar: ${data.produccion_solar}`;
}

// Eventos del formulario
document.getElementById('consumo-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const potencia = document.getElementById('potencia').value;
    const horas = document.getElementById('horas').value;
    calcularConsumoEnergetico(potencia, horas);
});

document.getElementById('produccion-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const area = document.getElementById('area').value;
    const irradiacion = document.getElementById('irradiacion').value;
    const eficiencia = document.getElementById('eficiencia').value;
    calcularProduccionSolar(area, irradiacion, eficiencia);
});

//Nueva API huella-carbono

document.getElementById("calcular").addEventListener("click", async function (event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const state = document.getElementById("state").value;
    const elect = parseFloat(document.getElementById("elect").value) || 0;
    const gas = parseFloat(document.getElementById("gas").value) || 0;
    const water = parseFloat(document.getElementById("water").value) || 0;
    const lpg = parseFloat(document.getElementById("lpg").value) || 0;
    const gn = parseFloat(document.getElementById("gn").value) || 0;
    const fly = parseFloat(document.getElementById("fly").value) || 0;
    const cogs = parseFloat(document.getElementById("cogs").value) || 0;
    const person = parseInt(document.getElementById("person").value) || 1;

    // Crear el objeto de datos
    const data = { state, elect, gas, water, lpg, gn, fly, cogs, person };

    try {
        // Enviar los datos al servidor
        const response = await fetch("http://localhost:3002/api/huella-carbono", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        // Manejar la respuesta del servidor
        if (!response.ok) {
            const errorData = await response.json();
            alert("Error: " + (errorData.error || "Error desconocido"));
            return;
        }

        const result = await response.json();

        // Mostrar los resultados en el frontend
        document.getElementById("resultado").value = result.total || 0;
        document.getElementById("estado").value = result.estado || "N/A";
        document.getElementById("percapita").value = result.per_capita || 0;
        document.getElementById("per_capita_estado").value = result.per_capita_estado || 0;
        document.getElementById("promedioUSA").value = result.promedioUSA || 0;
        document.getElementById("promedioMundial").value = result.promedioMundial || 0;
        document.getElementById("porcentajeEstado").value = result.porcentajeEstado + "%" || "N/A";
        document.getElementById("porcentajeUSA").value = result.porcentajeUSA + "%" || "N/A";
        document.getElementById("porcentajeMundial").value = result.porcentajeMundial + "%" || "N/A";
        console.log("Detalles:", result.detalles);
    } catch (error) {
        console.error("Error al enviar los datos:", error);
        alert("Hubo un error al comunicarse con el servidor.");
    }
});