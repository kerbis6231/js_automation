import allureReporter from "@wdio/allure-reporter";

//TODO - Move this selectors to external file and parse them
const URL_TEXT_BOX = "(//*[@value='http://myserver.com/file.mkv'])"
const DOWNLOAD_FILE = "//XCUIElementTypeButton[@name='Download']"
const FILE_FORMAT_NOT_SUPPORTED_ALERT = '//*[@name="File format not supported"]'
const ADDRESS_SCHEME_NOT_SUPPORTED = '//*[@name="Address scheme not supported"]'

class Downloads {


    get urlTxtBox() {
        return $(URL_TEXT_BOX)
    }

    setUrlToDownloadFrom(url){
        allureReporter.addStep('step of setting URL - ' + url)

        this.urlTxtBox.setValue(url)
        return this
    }
    clickToDownload(){
        allureReporter.addStep('step of click on download')
        $(DOWNLOAD_FILE).click()
        return this
    }

    get alertOfUnsupportedFile(){
        if ($(FILE_FORMAT_NOT_SUPPORTED_ALERT).isDisplayed()) return $(FILE_FORMAT_NOT_SUPPORTED_ALERT)
        return $(ADDRESS_SCHEME_NOT_SUPPORTED)
    }

}
export default new Downloads();
