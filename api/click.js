//test suite
describe('Webdriver IO api', function() {

    //testcase
    it('should click on audio', function() {
        console.log('audio')
        const AUDIO = '~audio'
        const DONE = '~Done'
        const NETWORK = 'localNetwork'
        const STREAM = 'stream'

        $(DONE).click()
        browser.pause(3000)
        $(AUDIO).click()
        $(NETWORK).click()
        browser.pause(3000)
        $(STREAM).click()
        browser.pause(3000)

    });

    it('should create acount sucsessfully ', function () {
        console.log('Second test')

    });
});