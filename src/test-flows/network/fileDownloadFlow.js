import Downloads from "../../page-objects/network/downloads";
import allureReporter from "@wdio/allure-reporter";

class FileDownloadsFlow{

    constructor(url) {
        this.url = url
    }

    set_url_and_download(){
        Downloads.set_url_to_download_from(this.url).click_on_download()
        browser.pause(10000)
    }

    verify_pop_up_error_of_unsupported(){
        allureReporter.addStep('verify unsupported format')
        chaiExpect(Downloads.alert_of_unsupported_file.getText()).to.contain("File format not supported", "Not Supported Alert didnt show")
        console.log("Unsupported error as expected")

    }

    verify_pop_up_error_of_bad_scheme(){
        allureReporter.addStep('verify bad scheme')
        chaiExpect(Downloads.alert_of_unsupported_file.getText()).to.contain("scheme", "format Alert didnt show")
        console.log("Bad scheme error as expected")

    }
}

export default FileDownloadsFlow;
