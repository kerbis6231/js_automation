//Declare selector calues on the page

const URL_TEXT_BOX = "(//*[@value='http://myserver.com/file.mkv'])"
const OPEN_STREAM = "//XCUIElementTypeButton[@name='Open Network Stream']"
const NETWORK = '~localNetwork'
const STREAM = '~stream'
const DONE = '~Done'
const PLAY = '~Play or pause'


class StartNetworkStreamWithGlobalWait {

    wait_until_network_screen_loaded(){
        $(STREAM).waitForDisplayed()
    }
    wait_until_stream_screen_loaded(){
        $(OPEN_STREAM).waitForDisplayed()
    }
    get url_txt_box(){
        return $(URL_TEXT_BOX)
    }
    get network_tab(){
        $(NETWORK).waitForDisplayed()
        return $(NETWORK)
    }
    get open_network_stream_from_list(){
        return $(STREAM)
    }
    get done_button(){
        return $(DONE)
    }
    get open_stream_button(){
        return $(OPEN_STREAM)
    }
    get play_pause_button(){
        return $(PLAY)
    }

}
export default new StartNetworkStreamWithGlobalWait()
//Export an istance and NOT a class
