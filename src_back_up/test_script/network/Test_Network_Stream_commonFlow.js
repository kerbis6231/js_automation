import NetworkTabFlow from "../../test_flows/network/networkTabFlow";
import StreamScreenFlow from "../../test_flows/network/streamScreenFlow";
import testData from "../../page_object/test_data/Test_Network_Stream_CommonFlow";

describe('URL stream teskvdkt4', function(){

    it('should start stream of some url', function() {
        let network_tab_flow = new NetworkTabFlow()
        let stream_screen_flow = new StreamScreenFlow()

        const {GOOD_AND_BAD_URLS} = testData.URLS;
        const {bad_url, good_url} = GOOD_AND_BAD_URLS;
        console.log("yyoo ",bad_url)


        network_tab_flow.enter_stream_screen()
        // stream_screen_flow.set_and_verify_url_to_stream(bad_url)
        stream_screen_flow.set_and_verify_url_to_stream(good_url)

        browser.pause(4000)



    });
});