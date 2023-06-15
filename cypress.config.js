const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1280,  
  viewportWidth: 1024,      // Set viewport to desktop size
  e2e: {
    baseUrl: 'https://www.trustedshops.de/bewertung/info_X77B11C1B8A5ABA16DDEC0C30E7996C21.html',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    //pageLoadTimeout: 500000,
  excludeSpecPattern:['**/1-getting-started/*', '**/2-advanced-examples/*']
  },

})