import React from "react";
import styles from './ToggleNotifications.module.css';
import Svg from "../../Svg/Svg";

const ToggleNotifications = () => {
    return (
        <div className={styles.toggleNotifications}>
            <span>Disable sound notifications</span>
            <Svg name='gear'/>
        </div>
    )
}

export default ToggleNotifications;