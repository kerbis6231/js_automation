//Declare selector calues on the page
import Stream_Screen from "./streamScreen";
import click from "webdriverio/build/commands/element/click";
const NETWORK = '~localNetwork'
const STREAM = '~stream'
const DONE = '~Done'


class NetworkTab extends Stream_Screen{


    get network_tab(){
        $(NETWORK).waitForDisplayed()
        return $(NETWORK)
    }
    get open_network_stream_from_list(){
        $(STREAM).waitForDisplayed()
        return $(STREAM)
    }
    get done_button(){
        $(DONE).waitForDisplayed()

        return $(DONE)
    }

    clickDoneButton(){
        this.done_button.click()
        return this
    }

    clickNetworkTabButton(){
        this.network_tab.click()
        return this

    }

    click_open_network_stream_from_list_button(){
        this.open_network_stream_from_list.click()
        return this


    }


}

export default new NetworkTab();
// module.exports = NetworkTab

//Export an istance and NOT a class
