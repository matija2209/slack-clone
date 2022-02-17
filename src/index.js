import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ChatProvider} from './context/chat_context' 
import {UserProvider} from './context/user_context' 
import {ChannelProvider} from './context/channel_context' 

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ChannelProvider>
        <ChatProvider>
          <App />
        </ChatProvider>
      </ChannelProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

