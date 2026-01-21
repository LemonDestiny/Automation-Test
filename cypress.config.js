const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,               // Crea un gráfico circular de los resultados
    reportPageTitle: 'Mi Reporte de Pruebas',
    embeddedScreenshots: true,  // ¡ESTA ES LA CLAVE! Pone la foto dentro del HTML
    inlineAssets: true,},
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  env: {

    demoBlaze:{
      username: "lemonDestiny",
      password: "1234"
    }
  }
  },
});
