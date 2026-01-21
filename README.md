🚀 Cypress E2E & API Testing - Prueba técnica
--------
Este repositorio contiene una suite de pruebas automatizadas para el sitio **DemoBlaze** (UI) y la API de **Petstore**, integrando validaciones de flujos completos y consistencia de datos.

🛠️ Tecnologías Utilizadas
---
* **Cypress**: Framework principal de automatización.
* **JavaScript**: Lenguaje de scripting.
* **Page Object Model (POM)**: Patrón de diseño para mantenibilidad.
* **Mochawesome Reporter**: Generación de reportes dinámicos.

⚠️ Requisitos
---------
Es importante que antes de comenzar el proyecto tengas lo siguiente:

▪️Node.js(Versión LTS)

▪️npm o yarn

▪️git

🛠️ Clonar Repositorio
--------
Ejecuta el siguiente comando en tu terminal: git clone https://github.com/LemonDestiny/Automation-Test

Luego cambiamos al directorio del proyecto con: cd PruebaTecnica

Instalamos las dependencias correspondientes con npm install

⚙️Ejecutamos Cypress
---
Podemos ejecutar cypress de dos maneras

Modo Interactivo: Para visualizar la ejecución paso a paso en el navegador.

npx cypress open

Modo Headless(Sin interfaz):Ejecución en segundo plano con generación automática de evidencias (Videos y Reportes)

npx cypress run

📊 Reportes y Evidencias
-----
Al finalizar la ejecución en modo headless, podrás encontrar:

Videos: En cypress/videos.

Reporte HTML: En cypress/reports

📮 Postman
--
Se incluye la colección de pruebas manuales y automatizadas en la carpeta /postman.

Archivo: Petstore_Collection.json

Ambiente: Petstore_Environment.json

Nota: Las peticiones incluyen scripts de validación de status code y tiempos de respuesta.

A través de este [Enlace](https://api.postman.com/collections/25511524-7a0cc21e-a6aa-4dbe-b33c-e88f8fe1cf98?access_key=PMAT-01KFGT267DEZK69ZC8Z9THKXJE) de Postman se puede acceder a la documentación interactiva y visualizar los casos de prueba sin necesidad de importar archivos.
