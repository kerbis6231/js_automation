import SettingsTab from "../../page-objects/settings/settingsTab";
import NavBar from "../../page-objects/common/navBar";

class SettingsTabFlow{

    enterSettingsScreen(){
        NavBar.handleLocalNetworkPopup()
        NavBar.handleDoneBtnForDialog()
        SettingsTab.clcikOnSettingsTab()

    }
}
export default SettingsTabFlow;
