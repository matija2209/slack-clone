import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ChatProvider} from './context/chat_context' 
import {ChannelProvider} from './context/channel_context' 

ReactDOM.render(
  <React.StrictMode>
    <ChannelProvider>
      <ChatProvider>
        <App />
      </ChatProvider>
    </ChannelProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

