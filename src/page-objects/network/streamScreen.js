import allureReporter from "@wdio/allure-reporter";
const URL_TEXT_BOX = "(//*[@value='http://myserver.com/file.mkv'])"
const OPEN_STREAM = "//XCUIElementTypeButton[@name='Open Network Stream']"

class Stream_Screen {


    get url_txt_box() {
        return $(URL_TEXT_BOX)
    }

    set_url_to_stream_from(url){
        allureReporter.addStep('step of setting URL - ' + url.toString())
        $(URL_TEXT_BOX).setValue(url)
        return this

    }
    click_on_stream(){
        allureReporter.addStep('step of click on stream')
        $(OPEN_STREAM).click()
        return this
    }


}
module.exports = Stream_Screen
