import React from "react";
import styles from './ExtraSettings.module.css';

const ExtraSettings = (props) => {
    let className = props.visible? styles.enable : styles.disable;
    return (
        <div className={className + ' ' + styles.hiddenSettings}>
            <div className={styles.profileInfo + ' ' + styles.item}>
                <img src={props.profileImg} alt='avatar'/>
                <div className={styles.about}>
                    <span className={styles.name}>{props.name}</span>
                    <span className={styles.vkConnect}>Go to VK connect</span>
                </div>
            </div>
            <div className={styles.br}/>
                <span className={styles.item + ' ' + styles.help}>Help</span>
                <span className={styles.item}>Settings</span>
        <div className={styles.br}/>
            <div className={styles.item + ' ' + styles.signout}>Sign Out</div>
        </div>
    )
}

export default ExtraSettings;