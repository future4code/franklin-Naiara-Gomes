import React from "react";
import { useState } from "react";
import "./App.css";
import ChatListItem from "./components/ChatListItem";
import ChatWindow from "./components/ChatWindow";

//import MessageItem from './MessageItem';

const App = () => {
  const [chatlist, setChatList] = useState([{}, {}, {}, {}]);

  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img
            className="header--avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLpv-aiQ1HrNd7Z5_JJRNtsWvMb-_Uj_-op3v3_UPObXPAkTePwrO-Cqul_juvTLliMk&usqp=CAU"
            alt=""
          />

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.75 10C19.75 9.58579 19.4142 9.25 19 9.25C18.5858 9.25 18.25 9.58579 18.25 10H19.75ZM16.417 4.81445C16.6775 5.13645 17.1498 5.18625 17.4718 4.92569C17.7938 4.66513 17.8436 4.19288 17.583 3.87088L16.417 4.81445ZM18.25 10C18.25 14.5563 14.5563 18.25 10 18.25V19.75C15.3848 19.75 19.75 15.3848 19.75 10H18.25ZM10 18.25C5.44365 18.25 1.75 14.5563 1.75 10H0.25C0.25 15.3848 4.61522 19.75 10 19.75V18.25ZM1.75 10C1.75 5.44365 5.44365 1.75 10 1.75V0.25C4.61522 0.25 0.25 4.61522 0.25 10H1.75ZM10 1.75C12.5913 1.75 14.9033 2.94386 16.417 4.81445L17.583 3.87088C15.7968 1.66347 13.0632 0.25 10 0.25V1.75Z" fill="#001A72"/>
</svg>

          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5H13M5 9H10M4 13V18L9 13H17V1H1V13H4Z" stroke="#001A72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


          <div className="header--buttons">
            <div className="header--btn">
            <svg width="4" height="18" viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 1L2 2L2 1ZM3 2L4 2L3 2ZM2 3V4V3ZM1 2L2 2L1 2ZM2 8L2 9L2 8ZM3 9H4H3ZM2 10V11V10ZM1 9H2H1ZM2 15L2 16L2 15ZM3 16H4H3ZM2 17V18V17ZM1 16H2H1ZM2 2L4 2C4 0.89543 3.10457 0 2 0L2 2ZM2 2H2L2 4C3.10457 4 4 3.10457 4 2L2 2ZM2 2L2 2L0 2C5.96046e-08 3.10457 0.89543 4 2 4L2 2ZM2 2V2L2 0C0.89543 5.96046e-08 0 0.895431 0 2L2 2ZM2 9H4C4 7.89543 3.10457 7 2 7L2 9ZM2 9H2L2 11C3.10457 11 4 10.1046 4 9H2ZM2 9H2H0C5.96046e-08 10.1046 0.89543 11 2 11L2 9ZM2 9L2 7C0.89543 7 0 7.89543 0 9H2ZM2 16H4C4 14.8954 3.10457 14 2 14L2 16ZM2 16H2L2 18C3.10457 18 4 17.1046 4 16H2ZM2 16H2H0C5.96046e-08 17.1046 0.89543 18 2 18L2 16ZM2 16L2 14C0.89543 14 0 14.8954 0 16H2Z" fill="#001A72"/>
</svg>

            </div>
          </div>
        </header>

        <div className="search">
          <div className="search--input">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.4697 20.5303C19.7626 20.8232 20.2374 20.8232 20.5303 20.5303C20.8232 20.2374 20.8232 19.7626 20.5303 19.4697L19.4697 20.5303ZM16.3336 15.273C16.0407 14.9801 15.5659 14.9801 15.273 15.273C14.9801 15.5659 14.9801 16.0408 15.273 16.3336L16.3336 15.273ZM10.5 17.25C6.77208 17.25 3.75 14.2279 3.75 10.5H2.25C2.25 15.0563 5.94365 18.75 10.5 18.75V17.25ZM3.75 10.5C3.75 6.77208 6.77208 3.75 10.5 3.75V2.25C5.94365 2.25 2.25 5.94365 2.25 10.5H3.75ZM10.5 3.75C14.2279 3.75 17.25 6.77208 17.25 10.5H18.75C18.75 5.94365 15.0563 2.25 10.5 2.25V3.75ZM17.25 10.5C17.25 14.2279 14.2279 17.25 10.5 17.25V18.75C15.0563 18.75 18.75 15.0563 18.75 10.5H17.25ZM20.5303 19.4697L16.3336 15.273L15.273 16.3336L19.4697 20.5303L20.5303 19.4697Z"
                fill="#001A72"
              />
            </svg>
            <input
              type="search"
              placeholder="Procurar ou começar uma nova conversa"
            />
          </div>
        </div>

        <div className="chatlist">
          {chatlist.map((item, key) => (
            <ChatListItem key={key} />
          ))}
        </div>
      </div>
      <div className="contentarea">
         <ChatWindow />
   </div>
    </div>
  );
};
export default App;
