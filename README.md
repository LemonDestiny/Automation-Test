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
