//Declare selector calues on the page
import allureReporter from "@wdio/allure-reporter";

//TODO - Move this selectors to external file and parse them
const DEFAULT_PLAYBACK_SPEED = "~Default playback speed"
const DOT_SEVENTY_FIVE = "~0.75x"
const DOT_FIFTY = "~0.50x"

class DefaultPlayBackSpeed {

    get defaultPlaybackSpeed(){
        return $(DEFAULT_PLAYBACK_SPEED)
    }

    get speedOfSeventyFive(){
        return $(DOT_SEVENTY_FIVE)
    }

    get speedOfFifty(){
        return $(DOT_FIFTY)
    }

    clickOnDefaultPlaybackSpeed(){
        allureReporter.addStep('click on default playback speed')
        this.defaultPlaybackSpeed.click()
        return this
    }

    clickOnSpeedSeventyFive(){
        allureReporter.addStep('click on 75')
        this.speedOfSeventyFive.click()
        return this

    }

    clickOnSpeedFifty(){
        allureReporter.addStep('click on 50')
        this.speedOfFifty.click()
        return this

    }
}

export default new DefaultPlayBackSpeed();

