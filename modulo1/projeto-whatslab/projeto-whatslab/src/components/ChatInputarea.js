import React from 'react';
import './ChatInputarea.css';


function ChatInputarea() {

    return (
     
         <div className='chat--footer'>
             <input className="chat--input"
             type="text"
             placeholder="Usuário" 
             />
              <input className="chat--input"
             type="text"
             placeholder="Digite uma mensagem" 
             />
             <button>Enviar</button>
         </div>

    )
}

export default ChatInputarea;