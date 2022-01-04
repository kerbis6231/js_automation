import Stream_Screen from "./streamScreen";
import allureReporter from "@wdio/allure-reporter";

const NETWORK = '~localNetwork'
const STREAM = '~stream'
const DOWNLOADS = '~Downloads'


class NetworkTab extends Stream_Screen{



    get downloads_button(){
        $(DOWNLOADS).waitForDisplayed()
        return $(DOWNLOADS)
    }

    get network_tab(){
        $(NETWORK).waitForDisplayed()
        return $(NETWORK)
    }

    get open_network_stream_from_list() {
        $(STREAM).waitForDisplayed()
        return $(STREAM)
    }

    is_on_network_tab(){
        return $(DOWNLOADS).isDisplayed();

    }
    click_downloads_button_from_list(){
        allureReporter.addStep('step of click on downloads button')

        this.downloads_button.click()
        return this
    }

    clickNetworkTabButton(){
        allureReporter.addStep('step of click on network tab')
        this.network_tab.click()
        return this

    }

    click_open_network_stream_from_list_button(){
        allureReporter.addStep('step of network from list')
        this.open_network_stream_from_list.click()
        return this

    }



}

export default new NetworkTab();
