import NetworkTabFlow from "../../test-flows/network/networkTabFlow";
import StreamScreenFlow from "../../test-flows/network/streamScreenFlow";
import testData from "../../test-data/network/Test_Network_Stream";
const INTRO_TEXT = "Tested on - " + driver.capabilities.deviceName

describe(INTRO_TEXT + 'Test Stream From URL', function(){

    it('Should start stream of some url and check if stream started ', function() {
        const {GOOD_AND_BAD_URLS} = testData.URLS;
        const {bad_url, good_url} = GOOD_AND_BAD_URLS;

        let network_tab_flow = new NetworkTabFlow()
        let stream_screen_flow = new StreamScreenFlow(good_url)


        network_tab_flow.enterStreamScreen()
        stream_screen_flow.setAndVerifyUrlStream()

        browser.pause(4000)

    });
});
