import allureReporter from "@wdio/allure-reporter";
const URL_TEXT_BOX = "(//*[@value='http://myserver.com/file.mkv'])"
const OPEN_STREAM = "//XCUIElementTypeButton[@name='Open Network Stream']"
const PLAY = '~Play or pause'

class Stream_Screen {


    wait_for_screen_to_load() {
        $(URL_TEXT_BOX).waitForDisplayed()
    }

    get url_txt_box() {
        return $(URL_TEXT_BOX)
    }
    get open_stream_button(){
        return $(OPEN_STREAM)
    }
    get play_pause_button(){
        return $(PLAY)
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

    verify_url_txt(txt_box_el){
        allureReporter.addStep('verify text box url')

        // return expect(value).toHaveText("mp4", {containing:true})
        chaiExpect(txt_box_el.getText()).to.contain("mp4", "ERR- kaka was not found")
    }


}
module.exports = Stream_Screen
// export default new Stream_Screen();
