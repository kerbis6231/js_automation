import allureReporter from "@wdio/allure-reporter";

//TODO - Move this selectors to external file and parse them
const SETTINGS = '~settings'

class SettingsTab {

    get settingsTabButton(){
        return $(SETTINGS)
    }

    clcikOnSettingsTab(){
        allureReporter.addStep('click on settings tab')
        this.settingsTabButton.click()
    }
}
export default new SettingsTab();
