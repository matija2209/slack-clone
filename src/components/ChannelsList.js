import React from 'react'
import ListTitle from './ListTitle'
import AddChannel from './AddChannel'
import {useChannelContext} from '../context/channel_context'
import ChannelListItem from './ChannelListItem'

function ChannelsList() {
  const {addChannel,channelList} = useChannelContext()
    return <>
    <ListTitle title="Channels"></ListTitle>
    <ul>
      {channelList.map(channel=>{
        return <ChannelListItem channel={channel}>
        </ChannelListItem>
      })}
    </ul>
    <AddChannel addChannel={addChannel}></AddChannel>
  </>
}

export default ChannelsList