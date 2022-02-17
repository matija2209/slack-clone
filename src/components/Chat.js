import React from 'react'
import ChatInput from './ChatInput'
import ChatMessages from './ChatMessages'
import styled from 'styled-components'
import {useChannelContext} from '../context/channel_context'
import ChatTitle from './ChatTitle'

function Chat() {
  const {defaultChannel} = useChannelContext()
  return (
    <main>
      <Wrapper>
        <ChatTitle name={defaultChannel.label}></ChatTitle>
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