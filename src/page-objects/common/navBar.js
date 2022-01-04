import allureReporter from '@wdio/allure-reporter'

//TODO - Move this selectors to external file and parse them

const DONE = '~Done'

class NavBar{

    get doneBtn(){
        return $(DONE)
    }


    handleLocalNetworkPopup(){
        allureReporter.addStep('step of handling local netowrk')
        try{
            driver.acceptAlert()
        }
        catch (e){
            console.log(e)
        }
        finally {
            console.log("passed")
        }
    }

    handleDoneBtnForDialog(){
        allureReporter.addStep('step of handling done button')

        try{
            this.doneBtn.click()
        }
        catch (e){
            console.log(e)
        }
        finally {
            console.log("passed")
        }
    }

}
export default new NavBar()
