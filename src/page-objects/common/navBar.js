const DONE = '~Done'
const NETWORK_TAB = '~localNetwork'
const SETTINGS_TAB = '~settings'
import allureReporter from '@wdio/allure-reporter'

class NavBar{

    get done_button(){
        return $(DONE)
    }


    handle_local_network_popup(){
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

    handle_done_button_for_dialog(){
        allureReporter.addStep('step of handling done button')

        try{
            this.done_button.click()
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
