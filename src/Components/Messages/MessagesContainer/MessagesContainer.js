import {connect} from "react-redux";
import Messages from "../Messages";


const mapStateToProps = state => {
    return {
        dialogs: state.messagesReducer.dialogs
    }
}

export default connect(mapStateToProps, {})(Messages)