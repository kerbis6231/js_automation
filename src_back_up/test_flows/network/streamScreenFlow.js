import NetworkTab from "../../page_object/network/networkTab";
// let url = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"

class StreamScreenFlow{

    set_and_verify_url_to_stream(url){
        let txt_el = NetworkTab.url_txt_box

        NetworkTab.set_url_to_stream_from(url)
        this.verify_url_txt(txt_el, "mp4")
        NetworkTab.click_on_stream()

    }

    verify_url_txt(txt_box_el, value){
        // return expect(value).toHaveText("mp4", {containing:true})
        chaiExpect(txt_box_el.getText()).to.contain(value, "ERR- kaka was not found")

    }
}

export default StreamScreenFlow
