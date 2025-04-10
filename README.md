Archivo `README.md`:


# API_Energyner
API_Energyner es una herramienta diseñada para simplificar cálculos energéticos complejos. Este proyecto integra un backend robusto y un frontend interactivo para facilitar la automatización de procesos energéticos y la generación de huellas energéticas, siendo una solución accesible para técnicos y profesionales del sector.

## Objetivo
El objetivo de API_Energyner es proveer una plataforma eficiente y precisa para realizar cálculos energéticos avanzados, reduciendo la carga manual y mejorando la productividad en el ámbito energético.

##Estructura del Proyecto
- Backend:
  - `energyServ.js`: Archivo principal del servidor que gestiona las APIs.
  - `footprint.js`: Algoritmo para análisis de huellas energéticas.
  - `package.json`: Define las dependencias y scripts del proyecto.

- Frontend:
  - `index.html`: Página principal para la interacción con el usuario.
  - `style.css`: Estilos aplicados al diseño de la interfaz.
  - `nav.js`: Lógica de comunicación dinámica y manipulación del DOM.

## Instalación

### Instalar el Backend
1. Clona el repositorio:
   ```bash
   git clone https://github.com/energyner/api_energyner
   ```
2. Accede a la carpeta del proyecto:
   ```bash
   cd API_Energyner/backend
   ```
3. Instala las dependencias:
   Asegúrate de tener Node.js instalado en tu máquina. Luego, ejecuta:
   ```bash
   npm install   ```

4. Ejecuta el servidor:
   Inicia el servidor con:
   ```bash
   node energyServ.js
   ```
   Esto inicializará el backend para que las APIs estén listas.

### Instalar el Frontend
1. Accede a la carpeta del frontend:
   ```bash
   cd ../frontend
   ```
2. Abre el archivo `index.html` en un navegador:
	El usuario puede abrir el archivo en el navegador de varias maneras:
		1. Desde el explorador de archivos:
   		- Navega a la carpeta `frontend`.
   		- Haz doble clic en el archivo `index.html`.
	2. Desde la terminal:
   - Si estás en la carpeta `frontend`, ejecuta el siguiente comando:     
		```bash
		C:\Users\[energyner]\api_energyner\frontend>     start index.html
		 ```
### Notas Adicionales**
- Asegúrate de que el servidor esté ejecutándose antes de interactuar con el frontend.
- Si encuentras problemas, verifica los mensajes en la consola del navegador y del servidor para depurar los errores.

¡Listo! Ahora tienes API_energyner funcionando en tu máquina.
