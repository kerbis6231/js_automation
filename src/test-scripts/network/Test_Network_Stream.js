import NetworkTabFlow from "../../test-flows/network/networkTabFlow";
import StreamScreenFlow from "../../test-flows/network/streamScreenFlow";
import testData from "../../test-data/network/Test_Network_Stream";
const INTRO_TEXT = "Tested on - " + driver.capabilities.deviceName

describe(INTRO_TEXT + 'Test Stream From URL', function(){

    it('should start stream of some url and ', function() {
        const {GOOD_AND_BAD_URLS} = testData.URLS;
        const {bad_url, good_url} = GOOD_AND_BAD_URLS;

        let network_tab_flow = new NetworkTabFlow()
        let stream_screen_flow = new StreamScreenFlow(good_url)


        console.log("yyoo ",bad_url)


        network_tab_flow.enter_stream_screen()
        // stream_screen_flow.set_and_verify_url_to_stream(bad_url)
        stream_screen_flow.set_and_verify_url_to_stream()

        browser.pause(4000)



    });
});