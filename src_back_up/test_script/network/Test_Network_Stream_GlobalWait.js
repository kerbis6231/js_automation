import StartNetworkStreamWithGlobalWait from '../../page_object/network/networkTab_GlobalWait';
let url = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
describe('URL stream test2', ()=>{

    it('should start stream of some url', ()=> {
        StartNetworkStreamWithGlobalWait.done_button.click()
        StartNetworkStreamWithGlobalWait.network_tab.click()
        StartNetworkStreamWithGlobalWait.wait_until_network_screen_loaded()
        StartNetworkStreamWithGlobalWait.open_network_stream_from_list.click()
        StartNetworkStreamWithGlobalWait.wait_until_stream_screen_loaded()
        StartNetworkStreamWithGlobalWait.url_txt_box.setValue(url)
        StartNetworkStreamWithGlobalWait.open_stream_button.click()
        StartNetworkStreamWithGlobalWait.play_pause_button.waitForDisplayed()
        browser.pause(4000)



    });
});