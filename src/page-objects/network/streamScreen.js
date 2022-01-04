import allureReporter from "@wdio/allure-reporter";

//TODO - Move this selectors to external file and parse them
const URL_TEXT_BOX = "(//*[@value='http://myserver.com/file.mkv'])"
const OPEN_STREAM = "//XCUIElementTypeButton[@name='Open Network Stream']"

class Stream_Screen {


    get url_txt_box() {
        return $(URL_TEXT_BOX)
    }

    setUrlToStreamFrom(url){
        allureReporter.addStep('step of setting URL - ' + url.toString())
        $(URL_TEXT_BOX).setValue(url)
        return this

    }
    clickOnStream(){
        allureReporter.addStep('step of click on stream')
        $(OPEN_STREAM).click()
        return this
    }


}
module.exports = Stream_Screen
