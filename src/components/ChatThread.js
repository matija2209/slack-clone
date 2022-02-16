import React from 'react'

function ChatThread({msg}) {
  return <>
    <div key={msg.id}>
      <h2>{msg.displayName}</h2>
      <p>{msg.message}</p>
    </div>
  </>
}

export default ChatThread