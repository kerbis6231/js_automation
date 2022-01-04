//Declare selector calues on the page
import allureReporter from "@wdio/allure-reporter";

const DEFAULT_PLAYBACK_SPEED = "~Default playback speed"
const DOT_SEVENTY_FIVE = "~0.75x"
const DOT_FIFTY = "~0.50x"

class DefaultPlayBackSpeed {

    get default_playback_speed(){
        return $(DEFAULT_PLAYBACK_SPEED)
    }

    get speed_of_seventy_five(){
        return $(DOT_SEVENTY_FIVE)
    }

    get speed_of_fifty(){
        return $(DOT_FIFTY)
    }

    click_on_default_playback_speed(){
        allureReporter.addStep('click on default playback speed')
        this.default_playback_speed.click()
        return this
    }

    click_on_speed_seventy_five(){
        allureReporter.addStep('click on 75')
        this.speed_of_seventy_five.click()
        return this

    }

    click_on_speed_fifty(){
        allureReporter.addStep('click on 50')
        this.speed_of_fifty.click()
        return this

    }
}

export default new DefaultPlayBackSpeed();

