import React from 'react'
import styled from 'styled-components'

export default function Search() {
  return <>
    <Wrapper>
        <input type="text" name="search" id="search" />
    </Wrapper>
  </>
}

const Wrapper = styled.div`
    background-color: white;


`