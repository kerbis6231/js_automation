import NetworkTab from "../../page-objects/network/networkTab";
import NavBar from "../../page-objects/common/navBar";
import allureReporter from '@wdio/allure-reporter'

class NetworkTabFlow{


    enter_stream_screen(){
        // this.handle_local_network_popup()
        NavBar.handle_local_network_popup()
        NavBar.handle_done_button_for_dialog()
        if(!NetworkTab.is_on_network_tab()) NetworkTab.clickNetworkTabButton()
        NetworkTab.clickNetworkTabButton().click_open_network_stream_from_list_button()

    }

    enter_downloads_screen(){
        // this.handle_local_network_popup()
        NavBar.handle_local_network_popup()
        NavBar.handle_done_button_for_dialog()
        if(!NetworkTab.is_on_network_tab()) NetworkTab.clickNetworkTabButton()
        NetworkTab.click_downloads_button_from_list()

    }
}
export default NetworkTabFlow;