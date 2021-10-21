let chai = require("chai")
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
        "src/test-scripts/network/Test_Network_Downloads.js",
        // "src/test-scripts/settings/Test_Default_Playback_Speed.js",

    ],
    capabilities:[{
        "platformName": "ios",
        "automationName": "xcuitest",
        "udid": "00008020-0015090236F8003A",
        "app": "/Users/talkerbis/Desktop/VLC-iOS/VLC.ipa",
        "platformVersion": "14",
        "deviceName": "Tal Kerbis",
        // "noReset": true,
        "bundleId": "com.exampletal.vlc-ios",
        "appPushTimeout": 100000,
        "autoGrantPermissions": true,
        // "autoDismissAlerts": true
        // "browser": "safari"

    }],
    mochaOpts:{
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 600000
    },
    waitForTimeOut : 5000,
    before: function (){
        global.chaiExpect = chai.expect

    }

    // reporters: [['allure', {
    //     outputDir: 'allure-results',
    //     disableWebdriverStepsReporting: true,
    //     disableMochaHooks: true
    //
    // }]
    // ]

}