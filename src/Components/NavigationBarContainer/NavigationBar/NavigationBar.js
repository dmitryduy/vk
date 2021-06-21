import React from "react";
import styles from './NavigationBar.module.css';
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationBar = (props) => {
    const navList = props.navList.map((item, index) => {
        return <NavigationItem hiddenGear={props.hiddenGear} key={index} item={item}/>
    })

    return (
        <div className={styles.navbar}>
            {navList}
        </div>
    )
}

export default NavigationBar;