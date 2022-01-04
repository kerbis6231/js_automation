import NetworkTabFlow from "../../test-flows/network/networkTabFlow";
import FileDownloadFlow from "../../test-flows/network/fileDownloadFlow";
import {DOWNLOAD_INPUTS} from "../../test-data/network/Test_File_Download";
import allureReporter from '@wdio/allure-reporter'

const {BAD_SCHEME, UNSUPPORTED_FORMAT} = DOWNLOAD_INPUTS
const INTRO_TEXT = "Tested on - " + driver.capabilities.deviceName
describe(INTRO_TEXT + '\nTest Error pop ups of Download From URL ' , function(){
    let network_tab_flow = new NetworkTabFlow()

    it('Should start download of bad FORMAT and verify error pop up  ', function() {
        allureReporter.addTestId("Test ID 0031 - Test downloads")
        allureReporter.addIssue("IOS-5331")
        allureReporter.addSeverity("critical")
        let downloads_flow = new FileDownloadFlow(UNSUPPORTED_FORMAT.unsupported_format)

        network_tab_flow.enter_downloads_screen()
        downloads_flow.set_url_and_download()
        downloads_flow.verify_pop_up_error_of_unsupported()

    });
    it('Should start download of bad SCHEME and verify error pop up  ', function() {
        let downloads_flow2 = new FileDownloadFlow(BAD_SCHEME.bad_scheme)

        driver.closeApp()
        driver.launchApp()

        network_tab_flow.enter_downloads_screen()
        downloads_flow2.set_url_and_download()
        downloads_flow2.verify_pop_up_error_of_bad_scheme()

        browser.pause(4000)



    });
});
