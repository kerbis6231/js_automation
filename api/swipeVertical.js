//test suite
describe('Webdriver IO api', function() {

    //testcase
    it('Save screen shot', function() {
        console.log('Network Stream')
        const DONE = '~Done'
        const SETTINGS = '~settings'



        try{
            $(DONE).click()
            $(SETTINGS).click()
        }
        finally {
            console.log("ok")
        }
        const{height} = driver.getWindowSize()


        //swipe vertically
        const anchorPercentage = 50
        const startPercentage = 90
        const endPercentage = 10

        const anchor = height * anchorPercentage / 100
        const start = height * startPercentage / 100
        const end = height * endPercentage / 100

        //horizon is with width
        //press on start and wait 1 second and swipe to end and release
        driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: anchor,
                    y: start
                }
            },
            {
                action: 'wait',
                options: {
                    ms: 1000

                }
            },
            {
                action: 'moveTo',
                options: {
                    x:anchor,
                    y:end
                }
            }
        ])


    });

    it('should create acount sucsessfully ', function () {
        console.log('Second test')

    });
});