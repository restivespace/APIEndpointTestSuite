const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      charts: true,
      reportPageTitle: 'API Endpoint Test Suite',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    specPattern: 'cypress/integration/api/**/*.spec.js',
    // baseUrl: 'https://api.example.com', // Replace with your API base URL
    env: {
      sidebarUrl: 'https://www.techinasia.com/wp-json/techinasia/3.0/meta/navigational/sidebar/upcoming-events',
      postsUrl: 'https://www.techinasia.com/wp-json/techinasia/2.0/posts?page=1&per_page=10'
    },
  },
})
