import NetworkTab from "../../page-objects/network/networkTab";
class StreamScreenFlow{

    constructor(url) {
        this.url = url
    }
    set_and_verify_url_to_stream(){
        let txt_el = NetworkTab.url_txt_box

        NetworkTab.set_url_to_stream_from(this.url)
        this.verify_url_txt(txt_el, "mp4")
        NetworkTab.click_on_stream()

    }

    verify_url_txt(txt_box_el, value){
        chaiExpect(txt_box_el.getText()).to.contain(value, "ERR- this was not found")

    }
}

export default StreamScreenFlow
