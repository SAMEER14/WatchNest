import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
      <img 
        className='h-9'
        alt='user'
        src='https://cdn-icons-png.flaticon.com/512/9187/9187604.png' 
        />
        <span className='font-bold p-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage
