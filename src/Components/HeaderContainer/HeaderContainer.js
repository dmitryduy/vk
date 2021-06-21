import {connect} from "react-redux";
import Header from "../Header/Header";
import {
 searchFriends,
} from "../../redux/reducers/headerReducer";


const mapStateToProps = state => {
    return {
        profileName: state.headerReducer.profileName,
        profileSurname: state.headerReducer.profileSurname,
        profileImg: state.headerReducer.profileImg,
        friends: state.headerReducer.friends,
        maxShowFriend: state.headerReducer.maxShowFriend,
        foundFriends: state.headerReducer.foundFriends
    }
}


const HeaderContainer = connect(mapStateToProps, {
    searchFriends
})(Header);

export default HeaderContainer;