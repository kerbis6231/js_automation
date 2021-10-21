
import NetworkTab from './networkTab';
const URL_TEXT_BOX = "(//*[@value='http://myserver.com/file.mkv'])"
const OPEN_STREAM = "//XCUIElementTypeButton[@name='Open Network Stream']"


class StreamScreenMethodChaining extends NetworkTab{

    // chaining
    set_url_to_stream_from(url){
        $(URL_TEXT_BOX).setValue(url)
        return this

    }
    click_on_stream(){
        $(OPEN_STREAM).click()
        return this
    }


}
module.exports = StreamScreenMethodChaining

// export default new StreamScreenMethodChaining();
//Export an istance and NOT a class
