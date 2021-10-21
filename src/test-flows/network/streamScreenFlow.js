import NetworkTab from "../../page-objects/network/networkTab";
// let url = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"

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
        // return expect(value).toHaveText("mp4", {containing:true})
        chaiExpect(txt_box_el.getText()).to.contain(value, "ERR- kaka was not found")

    }
}

export default StreamScreenFlow
