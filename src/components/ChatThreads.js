import React from 'react'
import {useChatContext} from '../context/chat_context'
import ChatThread from './ChatThread'

function ChatThreads() {
  const {messages} = useChatContext();
  return <>
   {messages.map(msg=>{
     return <ChatThread msg={msg}></ChatThread>
   })}
  </>
}

export default ChatThreads