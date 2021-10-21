import NetworkTab from "../../page_object/network/networkTab"
let url = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
describe('URL stream test4', ()=>{

    it('should start stream of some url', ()=> {
        let network_tab = new NetworkTab()
        network_tab.done_button.click()
        network_tab.network_tab.click()
        network_tab.open_network_stream_from_list.click()
        network_tab.wait_for_screen_to_load.waitForDisplayed({timeout : 5000})
        network_tab.url_txt_box.setValue(url)
        network_tab.open_stream_button.click()
        network_tab.play_pause_button.waitForDisplayed({timeout: 10000})

        browser.pause(4000)



    });
});