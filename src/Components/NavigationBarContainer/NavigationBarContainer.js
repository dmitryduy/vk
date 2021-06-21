import {connect} from "react-redux";
import NavigationBar from "./NavigationBar/NavigationBar";

const mapStateToProps = state => {
    return {
        navList: state.navigationBarReducer.navList
    }
}
const NavigationBarContainer = connect(mapStateToProps, {})(NavigationBar);

export default NavigationBarContainer;