import React from 'react'
import ChatInput from './ChatInput'
import ChatMessages from './ChatMessages'
import styled from 'styled-components'
import {useChannelContext} from '../context/channel_context'
import ChatTitle from './ChatTitle'
import { useUserContext } from '../context/user_context'

function Chat() {
  const {defaultChannel} = useChannelContext()

  let chatTitle = defaultChannel.label
  if (defaultChannel.type === "private") {
    chatTitle = defaultChannel.label.split("-")[1]
  } 
  
  return (
    <main>
      <Wrapper>
        <ChatTitle name={chatTitle}></ChatTitle>
        <ChatMessages></ChatMessages>
        <ChatInput></ChatInput>
      </Wrapper>
    </main>
  )
}

export default Chat

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 90% 1fr;
  height: 100%;
`