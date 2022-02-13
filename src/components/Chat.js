import React from 'react'
import ChatInput from './ChatInput'
import ChatMessages from './ChatMessages'
import styled from 'styled-components'
import {useChatContext} from '../context/chat_context'
import ChatTitle from './ChatTitle'

function Chat() {
  const {channelName} = useChatContext()
  return (
    <main>
      <Wrapper>
        <ChatTitle name={channelName}></ChatTitle>
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