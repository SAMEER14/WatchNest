import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../utils/chatSlice';

const SendMessageLive = () => {

    const [sendLiveMessage, setSendLiveMessage] = useState("");
    const dispatch = useDispatch();

  return (
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault();
            // console.log(sendLiveMessage)
            
            dispatch(addMessage(
                {
                name:"Sameer Sharma",
                message: sendLiveMessage,
                }
            ));
            setSendLiveMessage("")
        }}>
      <input
        type="text"
        className="flex-grow px-14 py-2 m-1 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        placeholder="Type a message..."
        value={sendLiveMessage}
        onChange={(e) => setSendLiveMessage(e.target.value)}
        // onKeyPress={handleKeyPress}
      />
      <button
        // onClick={handleSendMessage}
        className="ml-2 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Send
      </button>
      </form>
    </div>
  )
}

export default SendMessageLive
