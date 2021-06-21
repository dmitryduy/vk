import React from "react";
import styles from './HiddenSearchComponent.module.css';

const HiddenSearchComponent = (props) => {

    let extraClass = props.visible ? styles.searchEnable : styles.searchDisable;

    const showExtendedSearch = () => {
        return (
            <>
                <div className={styles.allResult}>
                    <span>Show All Results</span>
                </div>
                {props.foundFriends.friends.length ? <div className={styles.searchStep}>Friends</div> : ''}
                {searchItems}
            </>
        )
    }

    const searchItems = props.foundFriends.friends.map((user, index) => {
        return (
            <div key={index} className={styles.searchItem}>
                <img src={user.avatar} className={styles.avatar} alt='avatar'/>
                <div className={styles.shortInfo}>
                    <span className={styles.name}>{user.name} {user.surname}</span>
                    <span className={styles.about}>{user.city ? user.city : user.studyPlace}</span>
                </div>
            </div>
        )
    })

    return (
        <div className={extraClass + ' ' + styles.hiddenSearch}>
            {props.foundFriends.showResults ? showExtendedSearch() : searchItems}
        </div>
    )
}

export default HiddenSearchComponent;