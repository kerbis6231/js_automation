import SettingsTab from "../../page-objects/settings/settingsTab";
import NavBar from "../../page-objects/common/navBar";

class SettingsTabFlow{

    enter_settings_screen(){
        NavBar.handle_local_network_popup()
        NavBar.handle_done_button_for_dialog()
        SettingsTab.click_on_settings_tab()

    }
}
export default SettingsTabFlow;