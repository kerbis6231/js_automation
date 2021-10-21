import NetworkTab from "../../page_object/network/networkTab";

class NetworkTabFlow{

    enter_stream_screen(){
        NetworkTab.clickDoneButton().clickNetworkTabButton().click_open_network_stream_from_list_button()

    }
}
export default NetworkTabFlow;