import DefaultPlayBackSpeed from "../../page-objects/settings/defaultPlayBackSpeed";

class DefaultPlayBackSpeedFlow{

    set_speed_to_seventy_five(){
        DefaultPlayBackSpeed.click_on_default_playback_speed().click_on_speed_seventy_five()

    }

    set_speed_to_fifty(){
        DefaultPlayBackSpeed.click_on_default_playback_speed().click_on_speed_fifty()

    }

    verify_speed_was_set_to_seventy_five(){
        // chaiExpect(DefaultPlayBackSpeed.speed_of_seventy_five.getText()).to.contain("0.75x", "Not on 75")
        // if(DefaultPlayBackSpeed.speed_of_seventy_five.isEnabled()){}
        // driver.findElement()
        console.log("seventyfive test")
        console.log(DefaultPlayBackSpeed.speed_of_seventy_five.getText())

        chaiExpect(DefaultPlayBackSpeed.speed_of_seventy_five.getAttribute("visible")).to.be.string("true", "the selected speed is not visible")

        chaiExpect(DefaultPlayBackSpeed.speed_of_seventy_five.getText()).to.contain("0.75", "Not on 75")

    }

    verify_speed_was_set_to_fifty(){
        chaiExpect(DefaultPlayBackSpeed.speed_of_fifty.getText()).to.contain("0.50", "Not on 50")

    }
}
export default DefaultPlayBackSpeedFlow;