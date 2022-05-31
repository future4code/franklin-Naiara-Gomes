import React from 'react';
import './App.css';
import ChatIntro from './components/ChatIntro';
import ChatInputarea from './components/ChatInputarea';


function App() {
  return (
    <div className="App">
       <div className="page-section-container">
        <div className="contentarea" >

       <ChatIntro />
       <ChatInputarea />
      
        </div>
      </div>
    </div>
  );
}

export default App;
