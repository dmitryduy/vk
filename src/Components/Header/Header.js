import React, {useState} from "react";
import styles from './Header.module.css';
import notificationsIcon from './../../img/bell-regular.svg';
import musicIcon from './../../img/music-solid.svg';

import Svg from "../Svg/Svg";
import HiddenSearchComponent from "../HiddenSearchComponent/HiddenSearchComponent";
import ExtraSettings from "./ExtraSettings/ExtraSettings";

const Header = props => {
    const [isVisibleSearch, setSearchVisibility] = useState(false);
    const [isVisibleSettings, setSettingsVisibility] = useState(false);

    function toggleSettings() {
        setSettingsVisibility(!isVisibleSettings);
    }

    return (
        <div className={styles.headerWrapper}>
            <div className={styles.header}>
                <div className={styles.logoWrapper}>
                    <Svg name='logo'/>
                </div>
                <div className={styles.searchWrapper}>
                    <div className={styles.search}>
                        <div className={styles.searchIconClass}>
                            <Svg name='search'/>
                        </div>
                        <input className={styles.searchInput}
                               type="text"
                               placeholder='Search'
                               onFocus={() => setSearchVisibility(true)}
                               onBlur={() => setSearchVisibility(false)}
                               onInput={(e) => {
                                   props.searchFriends(e.target.value)
                               }}/>
                    </div>
                    <HiddenSearchComponent visible={isVisibleSearch} foundFriends={props.foundFriends}/>
                </div>
                <div className={styles.notificationsIcon}>
                    <img src={notificationsIcon} alt="music icon"/>
                </div>
                <div className={styles.musicIcon}
                ><img src={musicIcon} alt="music icon"/>
                </div>
                <div tabIndex="-1"
                     onClick={toggleSettings}
                     onBlur={() => setSettingsVisibility(false)}
                     className={styles.profileLink}>
                    <ExtraSettings visible={isVisibleSettings}
                                   name={props.profileName + ' ' + props.profileSurname}
                                   profileImg={props.profileImg}/>
                    <span className={styles.profileName}>{props.profileName}</span>
                    <img className={styles.profileImg} src={props.profileImg} alt="avatar"/>
                    <Svg name='arrow'/>
                </div>
            </div>
        </div>

    )
}


export default Header;