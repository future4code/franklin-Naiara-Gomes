import React from 'react';
import './ChatListItem.css';

const ChatListItem = ( ) => {
    return (
        <div className="chatListItem">
        <img className="chatListItem--avatar" src="https://cdn-icons-png.flaticon.com/512/194/194938.png" alt="" />
        <div className="chatListItem--lines">
        <div className="chatListItem--line">

        <div className="chatListItem--name">Francine </div>
        <div className="chatListItem--date">19:00 </div>
              </div>
              <div className="chatListItem--line">
              <div className="chatListItem--lastMsg">
                  <p>"Opa, tudo bem?'</p>
              </div>
              </div>
           </div>
        </div>
    );
}
// eslint-disable-next-line no-undef
export default ChatListItem;

