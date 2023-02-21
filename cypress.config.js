const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    API_BASE_URL: 'https://api.typeform.com/',
  },
  e2e: {
    setupNodeEvents(on, config) {},
    supportFile: false,
  },
})