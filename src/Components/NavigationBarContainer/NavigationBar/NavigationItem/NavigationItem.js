import React, {useState} from "react";
import styles from './NavigationItem.module.css';
import {NavLink} from 'react-router-dom';
import Svg from "../../../Svg/Svg";

const NavigationItem = (props) => {
    let timer = null;
    const [isVisibleGear, setGearVisibility] = useState(false);

    const showCount = () => {
        if (props.item.count > 999) {
            return <div className={styles.notificationsCount}>999...</div>
        }
        if (props.item.count) {
            return <div className={styles.notificationsCount}>{props.item.count}</div>
        }
        return null;
    }

    const setTimer = (isSetTimer) => {
        if (isSetTimer) {
            timer = setTimeout(() => setGearVisibility(true), 1500);
        }
        else {
            clearTimeout(timer);
            setGearVisibility(false);
        }
    }

    return (
        <NavLink to={props.item.text.split(' ').join('').toLowerCase()}>
            <div className={styles.navItem}
                 onMouseEnter={() => setTimer(true)}
                 onMouseLeave={() => setTimer(false)}>
                {isVisibleGear
                    ? <div className={styles.gear + ' ' + styles.gearShow}><Svg name='gear'/></div>
                    : <div className={styles.gear + ' ' + styles.gearHidden}><Svg name='gear'/></div>}
                <span className={styles.svgItem}>{props.item.icon}</span>
                <span className={styles.text}>{props.item.text}</span>
                {showCount()}
            </div>
            {props.item.finishItem ? <div className={styles.br}/> : ''}
        </NavLink>

    )
}

export default NavigationItem;