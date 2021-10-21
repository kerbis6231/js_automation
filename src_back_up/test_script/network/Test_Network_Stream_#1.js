import NetworkTab from "../../page_object/network/networkTab";
let url = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
describe('URL stream test4', function (){

    it('should start stream of some url', function () {
        NetworkTab
            .clickDoneButton()
            .clickNetworkTabButton()
            .click_open_network_stream_from_list_button()

        let url_el = NetworkTab.url_txt_box
        NetworkTab.set_url_to_stream_from(url).verify_url_txt(url_el)

        browser.pause(4000)



    });
});