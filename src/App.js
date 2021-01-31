import { ChatEngine } from 'react-chat-engine'

import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed'
import './App.css'

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />

  return (

    <ChatEngine 
    height="100vh"
    projectID="cbf0d4e5-ccf7-4395-8233-643f112ec6b2"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
