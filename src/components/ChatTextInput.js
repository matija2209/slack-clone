import React from 'react'
import {useChatContext} from '../context/chat_context'

export default function ChatTextInput() {
  const {currentMessage,inputMessageChange} = useChatContext()
  return <>
    <input type="text" name="message" id="message" value={currentMessage} onChange={inputMessageChange}/>
  </>
} 
