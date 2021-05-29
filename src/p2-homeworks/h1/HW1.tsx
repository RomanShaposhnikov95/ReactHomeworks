import React from 'react';
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";
import h from './HW1.module.css';

const messageData = [
    {
        avatar: 'https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg',
        name: 'Роман',
        message: 'Игнат,привет! Как тебе мое ДЗ?',
        time: '22: 09' ,
    },
    {
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9E5nBRHxzLIWuBOwdWqV38omC-vYiquw8Qw&usqp=CAU',
        name: 'Игнат',
        message: 'Привет, проверил! Все супер!',
        time: '23: 13',
    },

]

function HW1() {
    return (
        <div className={h.general}>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}
            <Message tasks={messageData}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage tasks={messageData}/>
            <hr/>
        </div>
    )
}

export default HW1
