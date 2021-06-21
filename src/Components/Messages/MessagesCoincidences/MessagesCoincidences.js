import React from "react";
import styles from './MessagesCoincidences.module.css';
import DialogItem from "../DialogItem/DialogItem";

const MessagesCoincidences = (props) => {

    return (
        <>
            <div className={styles.foundMessages}>Search your messages</div>
            <div className={styles.chats}>Chats</div>
            {props.dialogs.map((dialog, index) => <DialogItem key={index} dialog={dialog} short={true}/>)}
        </>


    )
}

export default MessagesCoincidences;