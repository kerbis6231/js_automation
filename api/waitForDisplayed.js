//test suite
describe('Webdriver IO api', function() {

    //testcase
    it('Wait for stream to start', function() {
        console.log('Network Stream')
        const DONE = '~Done'
        const NETWORK = '~localNetwork'
        const STREAM = '~stream'
        const TEXT_BOX = "(//*[@value='http://myserver.com/file.mkv'])"
        const OPEN_STREAM = "//XCUIElementTypeButton[@name='Open Network Stream']"
        const PLAY = '~Play or pause'

        $(DONE).click()
        $(NETWORK).click()
        $(STREAM).click()
        $(TEXT_BOX).setValue("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4")

        $(OPEN_STREAM).click()
        $(PLAY).waitForDisplayed({timeout: 60000})
        browser.pause(10000)

    });

    it('should create acount sucsessfully ', function () {
        console.log('Second test')

    });
});