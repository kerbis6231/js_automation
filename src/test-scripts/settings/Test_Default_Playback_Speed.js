import allureReporter from '@wdio/allure-reporter'
import DefaultPlayBackSpeedFlow from "../../test-flows/settings/defaultPlayBackSpeedFlow";
import SettingsTabFlow from "../../test-flows/settings/settingsTabFlow";
import testData from "../../test-data/settings/Test_Default_Playback_Speed";
const INTRO_TEXT = "Tested on - " + driver.capabilities.deviceName

describe(INTRO_TEXT + 'Changing playback speed AND verifying that UI logic updateD according to user actions ', function(){

    it('should test playback default speed change 75', function() {
        let settings_tab_flow = new SettingsTabFlow()
        let default_playback_speed = new DefaultPlayBackSpeedFlow()

        settings_tab_flow.enter_settings_screen()
        default_playback_speed.set_speed_to_seventy_five()
        default_playback_speed.verify_speed_was_set_to_seventy_five()

        browser.pause(4000)



    })
    it('should test playback default speed change 50', function() {
        let settings_tab_flow = new SettingsTabFlow()
        let default_playback_speed = new DefaultPlayBackSpeedFlow()

        settings_tab_flow.enter_settings_screen()
        default_playback_speed.set_speed_to_fifty()
        default_playback_speed.verify_speed_was_set_to_seventy_five()

        browser.pause(4000)


    });
});