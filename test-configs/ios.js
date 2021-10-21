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
}]
exports.config = config