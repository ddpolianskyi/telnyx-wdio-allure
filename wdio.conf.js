const config = {
    specs: [
        './tests/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome'
        },
        {
            maxInstances: 1,
            browserName: 'MicrosoftEdge'
        },
        {
            maxInstances: 1,
            browserName: 'firefox'
        }
    ],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://telnyx.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['chromedriver'],
        ['MicrosoftEdge'],
        ['firefox-profile'],
        ['docker']
    ],
    framework: 'mocha',
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}

module.exports.config = config;