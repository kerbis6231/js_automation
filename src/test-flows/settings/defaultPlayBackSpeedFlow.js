import DefaultPlayBackSpeed from "../../page-objects/settings/defaultPlayBackSpeed";

class DefaultPlayBackSpeedFlow{

    setSpeedToSeventyFive(){
        DefaultPlayBackSpeed.clickOnDefaultPlaybackSpeed().clickOnSpeedSeventyFive()

    }

    setSpeedToFifty(){
        DefaultPlayBackSpeed.clickOnDefaultPlaybackSpeed().clickOnSpeedFifty()

    }

    verifySpeedWasSetToSeventyFive(){
        console.log("seventyfive test")
        console.log(DefaultPlayBackSpeed.speedOfSeventyFive.getText())

        chaiExpect(DefaultPlayBackSpeed.speedOfSeventyFive.getAttribute("visible")).to.be.string("true", "the selected speed is not visible")

        chaiExpect(DefaultPlayBackSpeed.speedOfSeventyFive.getText()).to.contain("0.75", "Not on 75")

    }

    verifySpeedWasSetToFifty(){
        chaiExpect(DefaultPlayBackSpeed.speedOfFifty.getText()).to.contain("0.50", "Not on 50")

    }
}
export default DefaultPlayBackSpeedFlow;
