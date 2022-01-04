import Downloads from "../../page-objects/network/downloads";
import allureReporter from "@wdio/allure-reporter";

class FileDownloadsFlow{

    constructor(url) {
        this.url = url
    }

    setUrlAndDownload(){
        Downloads.setUrlToDownloadFrom(this.url).clickToDownload()
        browser.pause(10000)
    }

    verifyPopupErrorOfUnsupportedUrl(){
        allureReporter.addStep('verify unsupported format')
        chaiExpect(Downloads.alertOfUnsupportedFile.getText()).to.contain("File format not supported", "Not Supported Alert didnt show")
        console.log("Unsupported error as expected")

    }

    verifyPopUpErrorOfBadScheme(){
        allureReporter.addStep('verify bad scheme')
        chaiExpect(Downloads.alertOfUnsupportedFile.getText()).to.contain("scheme", "format Alert didnt show")
        console.log("Bad scheme error as expected")

    }
}

export default FileDownloadsFlow;
