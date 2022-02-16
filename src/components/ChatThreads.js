import React from 'react'
import {useChatContext} from '../context/chat_context'
import {useChannelContext} from '../context/channel_context'
import ChatThread from './ChatThread'

function ChatThreads() {
  const {messages} = useChatContext();
  const {defaultChannel} = useChannelContext()

  const threadMessages = messages.filter(msg=>msg.channel === defaultChannel)
  return <>
   {threadMessages.map(msg=>{
     return <ChatThread msg={msg}></ChatThread>
   })}
  </>
}

export default ChatThreads