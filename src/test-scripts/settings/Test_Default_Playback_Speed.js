import DefaultPlayBackSpeedFlow from "../../test-flows/settings/defaultPlayBackSpeedFlow";
import SettingsTabFlow from "../../test-flows/settings/settingsTabFlow";
const INTRO_TEXT = "Tested on - " + driver.capabilities.deviceName

describe(INTRO_TEXT + 'Changing playback speed AND verifying that UI logic updateD according to user actions ', function(){

    it('Should test playback default speed change 75', function() {
        let settings_tab_flow = new SettingsTabFlow()
        let default_playback_speed = new DefaultPlayBackSpeedFlow()

        settings_tab_flow.enterSettingsScreen()
        default_playback_speed.setSpeedToSeventyFive()
        default_playback_speed.verifySpeedWasSetToSeventyFive()

        browser.pause(4000)



    })
    it('Should test playback default speed change 50', function() {
        let settings_tab_flow = new SettingsTabFlow()
        let default_playback_speed = new DefaultPlayBackSpeedFlow()

        settings_tab_flow.enterSettingsScreen()
        default_playback_speed.setSpeedToFifty()
        default_playback_speed.verifySpeedWasSetToSeventyFive()

        browser.pause(4000)


    });
});
