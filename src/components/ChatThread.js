import React from 'react'

function ChatThread({msg}) {
  return <>
    <div>
      <h2>{msg.displayName}</h2>
      <p>{msg.message}</p>
    </div>
  </>
}

export default ChatThread