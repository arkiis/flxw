import React from "react";
import * as Style from "./Chatroom.styles";
import Button from "../chatroom/Button";

const ChatroomButtons = ({ updateSelection, rooms }) => {
  const room = Object.keys(rooms);

  return (
    <Style.ChatRoomButtonWrapper>
      <Style.ChatRoomButtonContainer>
        {room.map((room, index) => {
          return (
            <Button key={index} updateSelection={updateSelection} room={room}>
              #{room}
            </Button>
          );
        })}
      </Style.ChatRoomButtonContainer>
    </Style.ChatRoomButtonWrapper>
  );
};

export default ChatroomButtons;
