const {config} = require('./main')
config.capabilities = [
    {
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
        // "systemPort" : 7001,
        // port: 7000
    },

]
config.suites = {
    networkTest: ['./src/test-scripts/network/Test_Network_Downloads.js',
        './src/test-scripts/network/Test_Network_Stream.js'],
    settingsTest: ['./src/test-scripts/settings/Test_Default_Playback_Speed.js']
}
exports.config = config
