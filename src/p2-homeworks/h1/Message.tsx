import React from 'react'
import m from './Message.module.css'


type inArray = {
    avatar: string ,
    name: string,
    message: string,
    time: string | number
}

type propsType = {
    tasks: Array <inArray>
}

function Message(props: propsType) {
    return (
        <div className={m.container} >
        <div className={m.foto}><img className={m.avatar} src={props.tasks[0].avatar}/></div>
        <div className={m.content}>
            <div className={m.ugol}></div>
            <div className={`${m.name} ${m.color}`}>{props.tasks[0].name}</div>
            <div className={`${m.message} ${m.color}`}>{props.tasks[0].message}</div>
            <div className={m.blockTime}><span className={`${m.time} ${m.color}`}>{props.tasks[0].time}</span></div>
        </div>
        </div>
    )
}

export default Message;
