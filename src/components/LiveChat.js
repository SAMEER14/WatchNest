import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessage, generateRandomName } from '../utils/helper';

const LiveChat = () => {

    //after making slice and configure to store => dispatch the action then subcribe to store
    const dispatch = useDispatch();
  
    //to display in UI , use useSelector
    const chatMessages = useSelector((store)=> store.chat.messages);

    useEffect(()=>{
    // API POLLING
    // here we use actual api data and dispatch that data 
        const i = setInterval(() => {
            // console.log("API POLLING");
            dispatch(
                addMessage({
                // name: "Sameer",
                name: generateRandomName(),
                // message: "Hello 👋🏻",
                message: generateRandomMessage(20),
            })
        );
        }, 1500);
        return () => clearInterval(i);      
    }, 
    // []
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
);

    return (
    <div>
        {/* <ChatMessage name="Sameer Sharma" message="This is my live chat😊"/>
        <ChatMessage name="Sameer Sharma" message="This is my live chat😊"/>
        <ChatMessage name="Sameer Sharma" message="This is my live chat😊"/>
        <ChatMessage name="Sameer Sharma" message="This is my live chat😊"/>
        <ChatMessage name="Sameer Sharma" message="This is my live chat😊"/> */}

        {/* do map */}
        {
        chatMessages.map((m,index)=>
        <ChatMessage key={index} name={m.name} message={m.message}/>
        )
        }
    </div>
  )
}

export default LiveChat
