// import NetworkTabMethodChaning from "../../page_object/network/streamScreenMethodChaning";
import NetworkTab from "../../page_object/network/networkTab";

let url = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
describe('URL stream teskvdkt4', function(){

    it('should start stream of some url', function() {
        // let network_tab_method_chaining = new NetworkTab()

        NetworkTab.done_button.click()
        NetworkTab.network_tab.click()
        NetworkTab.open_network_stream_from_list.click()
        NetworkTab.wait_for_screen_to_load()

        // chaining
        NetworkTab
            .set_url_to_stream_from(url)
            .click_on_stream()

        browser.pause(4000)



    });
});