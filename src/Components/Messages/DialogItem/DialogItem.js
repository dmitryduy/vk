import React from "react";
import styles from './DialogItem.module.css';
import Svg from "../../Svg/Svg";

const DialogItem = (props) => {
    const messagesClass = props.dialog.muted ? styles.muted : styles.unmuted;
    const mutedSvg = props.dialog.muted ? <Svg name='mute'/> : null;
    const unreadMessageClass = props.dialog.messagesCount ? styles.unreadMessages : null;

    const lastMessageInfo = props.dialog.messages[props.dialog.messages.length - 1];
    const showMiniAvatar = () => {
        return lastMessageInfo.id === props.dialog.id && props.dialog.type === 'dialog';

    }

    const countUnreadMessages = () => {
        if (props.dialog.messagesCount < 1000)
            return props.dialog.messagesCount;
        return Math.round(props.dialog.messagesCount / 1000) + 'K';

    }

    const unreadMessagesDiv = props.dialog.messagesCount
        ? <span className={styles.countMsgs + ' ' + messagesClass}>{countUnreadMessages()}</span>
        : null;

    if (!props.short)
        return (
            <div className={styles.dialogItem + ' ' + unreadMessageClass}>
               <img  className={styles.avatar} src={props.dialog.avatar} alt="avatar"/>
                <div className={styles.main}>
                    <div className={styles.name}>
                        <span>{props.dialog.name}</span>
                        <span className={styles.muteSvg}>{mutedSvg}</span>
                    </div>
                    <div className={styles.lastMsg}>
                        {showMiniAvatar() ? <img src={props.dialog.avatar} alt="avatar"/>: null}
                        <span>{lastMessageInfo.message}</span>
                    </div>
                </div>
                <div className={styles.extraInfo}>
                    <span className={styles.time}>{props.dialog.time}</span>
                    {unreadMessagesDiv}
                </div>
            </div>
        )
    else return (
        <div className={styles.shortContainer}>
            <img  className={styles.avatar + ' ' + styles.shortAvatar} src={props.dialog.avatar} alt="avatar"/>

                    <span className={styles.name + ' ' + styles.shortName}>{props.dialog.name}</span>

               <div className={styles.shortMessages}> {unreadMessagesDiv}</div>

        </div>
    )
}

export default DialogItem;