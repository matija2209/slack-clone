import React from 'react'
import Search from './Search'
import styled from 'styled-components'

function TopBar() {
  return (
    <Wrapper>
      <Search></Search>
    </Wrapper>
  )
}

export default TopBar

const Wrapper = styled.nav`
  display: grid;
  place-items: center;
`