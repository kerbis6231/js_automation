import allureReporter from "@wdio/allure-reporter";

const URL_TEXT_BOX = "(//*[@value='http://myserver.com/file.mkv'])"
const DOWNLOAD_FILE = "//XCUIElementTypeButton[@name='Download']"
const FILE_FORMAT_NOT_SUPPORTED_ALERT = '//*[@name="File format not supported"]'
const ADDRESS_SCHEME_NOT_SUPPORTED = '//*[@name="Address scheme not supported"]'

class Downloads {


    wait_for_screen_to_load() {
        $(URL_TEXT_BOX).waitForDisplayed()
    }

    get url_txt_box() {
        return $(URL_TEXT_BOX)
    }

    set_url_to_download_from(url){
        allureReporter.addStep('step of setting URL - ' + url)

        this.url_txt_box.setValue(url)
        return this
    }
    click_on_download(){
        allureReporter.addStep('step of click on download')

        $(DOWNLOAD_FILE).click()
        return this
    }

    get alert_of_unsupported_file(){
        if ($(FILE_FORMAT_NOT_SUPPORTED_ALERT).isDisplayed()) return $(FILE_FORMAT_NOT_SUPPORTED_ALERT)
        return $(ADDRESS_SCHEME_NOT_SUPPORTED)
    }

}
// module.exports = Downloads;
export default new Downloads();
