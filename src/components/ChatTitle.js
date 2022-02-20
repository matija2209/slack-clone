import React from 'react'
import styled from 'styled-components'
import UserCount from './UserCount'

function ChatTitle({name}) {
  return (
    <Wrapper>
      <span>#{name}</span>
      <UserCount></UserCount>
    </Wrapper>
  )
}

export default ChatTitle

const Wrapper = styled.div`
  border-bottom: 1px solid grey;
  display: grid;
  grid-template-columns: 1fr 1fr;
`