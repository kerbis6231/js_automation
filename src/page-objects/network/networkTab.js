import Stream_Screen from "./streamScreen";
import allureReporter from "@wdio/allure-reporter";

//TODO - Move this selectors to external file and parse them
const NETWORK = '~localNetwork'
const STREAM = '~stream'
const DOWNLOADS = '~Downloads'


class NetworkTab extends Stream_Screen{



    get downloadsBtn(){
        $(DOWNLOADS).waitForDisplayed()
        return $(DOWNLOADS)
    }

    get networkTab(){
        $(NETWORK).waitForDisplayed()
        return $(NETWORK)
    }

    get openNetworkStreamFromList() {
        $(STREAM).waitForDisplayed()
        return $(STREAM)
    }

    isOnNetworkTab(){
        return $(DOWNLOADS).isDisplayed();

    }
    clickDownloadsBtnFromList(){
        allureReporter.addStep('step of click on downloads button')

        this.downloadsBtn.click()
        return this
    }

    clickNetworkTabButton(){
        allureReporter.addStep('step of click on network tab')
        this.networkTab.click()
        return this

    }

    clickOpenNetworkStreamFromListBtn(){
        allureReporter.addStep('step of network from list')
        this.openNetworkStreamFromList.click()
        return this

    }



}

export default new NetworkTab();
