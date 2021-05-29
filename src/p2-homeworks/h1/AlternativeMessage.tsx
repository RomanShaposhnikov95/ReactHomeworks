import React from 'react'
import m from "./Message.module.css";

type inArray = {
    avatar: string ,
    name: string,
    message: string,
    time: string | number
}

type propsType = {
    tasks: Array <inArray>
}

function AlternativeMessage(props: propsType) {
    return (
        <div className={`${m.container} ${m.alternativeContainer}`}>
            <div className={`${m.content} ${m.alternativeContent}`} >
                <div className={m.alternativeUgol}></div>
                <div className={`${m.name} ${m.color}`}>{props.tasks[1].name}</div>
                <div className={`${m.message} ${m.color}`}>{props.tasks[1].message}</div>
                <div className={`${m.blockTime} ${m.alternativeTime}`}><span className={`${m.time} ${m.color}`}>{props.tasks[1].time}</span></div>
            </div>
            <div className={m.foto}><img className={m.avatar} src={props.tasks[1].avatar}/></div>
        </div>
    )
}

export default AlternativeMessage
