//Declare selector calues on the page

import allureReporter from "@wdio/allure-reporter";

const SETTINGS = '~settings'

class SettingsTab {

    get settings_tab_button(){
        return $(SETTINGS)
    }

    click_on_settings_tab(){
        allureReporter.addStep('click on settings tab')
        this.settings_tab_button.click()
    }
}
export default new SettingsTab();
