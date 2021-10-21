//test suite
describe('Webdriver IO api', function() {

    //testcase
    it('Add Value', function() {
        console.log('Network Stream')
        const DONE = '~Done'
        const NETWORK = '~localNetwork'
        const STREAM = '~stream'
        const TEXT_BOX = "(//*[@value='http://myserver.com/file.mkv'])"

        try{
            $(DONE).click()
            $(NETWORK).click()
            $(STREAM).click()
        }
        finally {
            console.log("ok")
        }

        let TEXT_BOX_EL = $(TEXT_BOX)
        TEXT_BOX_EL.addValue(".mp4")
        TEXT_BOX_EL.addValue(".com")

        TEXT_BOX_EL.addValue("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4")
        browser.pause(1000)
        TEXT_BOX_EL.setValue("kaka")
        TEXT_BOX_EL.clearValue()

    });

    it('should create acount sucsessfully ', function () {
        console.log('Second test')

    });
});