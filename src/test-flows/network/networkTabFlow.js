import NetworkTab from "../../page-objects/network/networkTab";
import NavBar from "../../page-objects/common/navBar";

class NetworkTabFlow{


    enterStreamScreen(){
        NavBar.handleLocalNetworkPopup()
        NavBar.handleDoneBtnForDialog()
        if(!NetworkTab.isOnNetworkTab()) NetworkTab.clickNetworkTabButton()
        NetworkTab.clickNetworkTabButton().clickOpenNetworkStreamFromListBtn()

    }

    enterDownloadsScreen(){
        NavBar.handleLocalNetworkPopup()
        NavBar.handleDoneBtnForDialog()
        if(!NetworkTab.isOnNetworkTab()) NetworkTab.clickNetworkTabButton()
        NetworkTab.clickDownloadsBtnFromList()

    }
}
export default NetworkTabFlow;
