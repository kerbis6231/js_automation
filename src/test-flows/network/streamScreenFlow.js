import NetworkTab from "../../page-objects/network/networkTab";
class StreamScreenFlow{

    constructor(url) {
        this.url = url
    }
    setAndVerifyUrlStream(){
        let txt_el = NetworkTab.url_txt_box

        NetworkTab.setUrlToStreamFrom(this.url)
        this.verifyUrlTxt(txt_el, "mp4")
        NetworkTab.clickOnStream()

    }

    verifyUrlTxt(txt_box_el, value){
        chaiExpect(txt_box_el.getText()).to.contain(value, "ERR- this was not found")

    }
}

export default StreamScreenFlow
