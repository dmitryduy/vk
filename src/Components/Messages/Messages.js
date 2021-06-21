import React, {useEffect, useState} from "react";
import styles from './Messages.module.css';
import Search from "./Seach/Search";
import ToggleNotifications from "./ToggleNotifications/ToggleNotifications";
import DialogItem from "./DialogItem/DialogItem";
import MessagesCoincidences from "./MessagesCoincidences/MessagesCoincidences";

const Messages = (props) => {
    const [type, setDialogsType] = useState('hidden');
    const [text, setText] = useState('');

    const showGlobalSearch = (type) => {
        console.log(text)
        if (type === 'suggest') {
            return <div>suggest</div>
        }
        if (type === 'search' && text) {
            const coincidences = [];
            props.dialogs.forEach(dialog => {
                if (dialog.name.toLowerCase().search(text.trim().toLowerCase()) !== -1) {
                    coincidences.push(dialog);
                }
            });
           if (coincidences.length === 0) {
               return <div className={styles.messagesNotFound}>No matching messages found.</div>
           }
           return <MessagesCoincidences dialogs={coincidences}/>
        }


        if (type === 'hidden' || !text) {
            return props.dialogs.map(dialog => <DialogItem dialog={dialog} key={dialog.id} short={false}/>);
        }
    }

    return (
        <>
            <div className={styles.hiddenLine}/>
            <div className={styles.messages}>
                <Search setText={setText} setDialogsType={setDialogsType}/>
                <div className={styles.dialogs}>
                    {showGlobalSearch(type)}
                </div>
                <ToggleNotifications/>
            </div>
        </>
    )
}

export default Messages;