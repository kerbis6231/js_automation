const {config} = require('./main')
config.capabilities = [{
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
    "systemPort" : 7001,
    port: 7000
    },
    {
        "platformName": "ios",
        "automationName": "xcuitest",
        "udid": "40410473-CC90-436D-8031-927200F6400D",
        "app": "/Users/talkerbis/Desktop/VLC-iOS/VLC.ipa",
        "platformVersion": "15",
        "deviceName": "iphone 13 Simulator",
        // "noReset": true,
        "bundleId": "com.exampletal.vlc-ios",
        "appPushTimeout": 100000,
        "autoGrantPermissions": true,
        // "autoDismissAlerts": true
        // "browser": "safari"
        "systemPort" : 6001,
        port: 6000
    }]
exports.config = config