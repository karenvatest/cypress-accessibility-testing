const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl: "https://logicnextgen.com/projects/logiccart/upload/index.php?route=account",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
