let chai = require("chai");
const allure = require('allure-commandline');

exports.config = {
    runner: 'local',
    port: 4723,
    path: '/wd/hub/',
    host: 'localhost',
    logLevel: 'info',
    framework: 'mocha',
    maxInstances: 1,
    sync: true,
    specs:[
        "src/test-scripts/network/Test_Network_Stream.js",
        "src/test-scripts/network/Test_Network_Downloads.js",
        "src/test-scripts/settings/Test_Default_Playback_Speed.js",

    ],
    mochaOpts:{
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 600000
    },
    waitForTimeOut : 5000,
    before: function (){
        global.chaiExpect = chai.expect

    },
    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    afterTest: function (test, context, {error, result, duration, passed, retries}){
        if(error){
            browser.takeScreenshot()
        }
    },



    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableMochaHooks: true,
        issueLinkTemplates: "{}",
        tmsLinkTemplate: "{}"


        }],


    ]


}