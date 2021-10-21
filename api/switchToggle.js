//test suite
describe('Webdriver IO api', function() {

    //testcase
    it('Toggle switch', function() {
        console.log('Network Stream')
        const DONE = '~Done'
        const NETWORK = '~localNetwork'
        const STREAM = '~stream'
        const TOGGLE = "(//XCUIElementTypeApplication[@name=\"VLC\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeSwitch)"
        try{
            $(DONE).click()
            $(NETWORK).click()
            $(STREAM).click()
        }
        finally {
            console.log("ok")
        }
        $(TOGGLE).click()


    });

    it('should create acount sucsessfully ', function () {
        console.log('Second test')

    });
});