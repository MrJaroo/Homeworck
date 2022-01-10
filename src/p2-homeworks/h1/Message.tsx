import React from 'react'
import {MessageDataType} from "./HW1";
import s from './Message.module.css'

function Message(props: MessageDataType) {
    return (
        <div className={s.container}>
            <div className={s.avatarContainer}>
                <img className={s.avatar} src={props.avatar} alt="logo"/>
            </div>
            <div className={s.containerMessage}>
                <div className={s.nameAndMessage}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.message}> {props.message}</div>
                    <div className={s.emptiness}></div>
                </div>
                <div className={s.time}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message
