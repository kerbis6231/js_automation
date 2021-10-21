//test suite
describe('Webdriver IO api', function() {

    //testcase
    it('Get Text Value', function() {
        console.log('Network Stream')
        const DONE = '~Done'
        const STREAM = '~Open Network Stream'
        const NETWORK = '~localNetwork'

        try{
            $(DONE).click()
            $(NETWORK).click()
        }
        finally {
            console.log("ok")
        }
        browser.pause(1000)
        let stream_value = $(STREAM).getText()

        console.log("INPUT ! - ", stream_value)
    });

    it('should create acount sucsessfully ', function () {
        console.log('Second test')

    });
});