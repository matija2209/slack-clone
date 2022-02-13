import React from 'react'
import ChannelsList from './ChannelsList'
import DirectMessagesList from './DirectMessagesList'
import NavList from './NavList'
import StarredList from './StarredList'
import AppsList from './AppsList'

function Navigation() {
  return (
    <div className='navigation'>Navigation
      <NavList></NavList>
      <StarredList></StarredList>
      <ChannelsList></ChannelsList>
      <DirectMessagesList></DirectMessagesList>
      <AppsList></AppsList>
    </div>
  )
}

export default Navigation