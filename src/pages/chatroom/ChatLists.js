import React from "react";
import * as Style from "./Chatroom.styles";

const ChatLists = ({ allChats, fixDate }) => {
  return (
    <Style.ChatList className="chat-list">
      {allChats.map(chat => (
        <Style.ChatListItems key={chat.id}>
          <Style.ChatListDivWrapper>
            <Style.ChatListDiv>{chat.user}</Style.ChatListDiv>
            <div>{chat.message}</div>
          </Style.ChatListDivWrapper>
          <Style.ChatListDate>
            {fixDate(chat.created_at.seconds)}
          </Style.ChatListDate>
        </Style.ChatListItems>
      ))}
    </Style.ChatList>
  );
};

export default ChatLists;
