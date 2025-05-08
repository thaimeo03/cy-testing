const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1280, // set the viewport size
    viewportHeight: 720, // set the viewport size
    watchForFileChanges: false, // disable file watching
    scrollBehavior: 'nearest', // scroll to the nearest element
  },
})
