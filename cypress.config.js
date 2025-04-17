const { defineConfig } = require("cypress");
const { registerAIOTestsPlugin } = require('cypress-aiotests-reporter/src')

module.exports = defineConfig({
  projectId: 'yit8bj',
  viewportWidth: 1600,
  viewportHeight: 900,
  reporter: 'cypress-mochawesome-reporter',
  // video: true,
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      registerAIOTestsPlugin(on, config);
    },
  },

  env: {
    aioTests: {
      enableReporting: true,
      jiraProjectId: 10154,
      addAttachmentToFailedCases: true,
      addTestBodyToComments: true,
      server: {
        jiraServerUrl: 'https://kb-fmf.atlassian.net/' || ''
      },
      cloud: {
        apiKey: 'NDAxMTY4ZDYtYzQwMi0zNzIyLWFiMzYtNzRjMTU0NjYyN2Y5LjY3ZDE2MGMwLWJiZDMtNDM2Yy1hMWMzLTc1OWM5ZmI5Nzc1NA==' || ''
      },
      cycleDetails: {
        cycleKey: 'MDM-CY-96',
        createNewCycle: false,
      }
    },
  }
});
