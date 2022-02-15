import React from 'react'
import styled from 'styled-components'

function ChannelListItem({...obj}) {
const {channel} = obj
  return <>
    <Wrapper>
        #{channel}
    </Wrapper>
  </>
}

export default ChannelListItem

const Wrapper = styled.li`

`