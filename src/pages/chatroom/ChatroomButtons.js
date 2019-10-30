import React from "react";
import * as Style from "./Chatroom.styles";

const ChatroomButtons = ({ updateSelection }) => {
  return (
    <Style.ChatRoomButtonWrapper>
      <Style.ChatRoomButtonContainer>
        <Style.ChatroomButton onClick={() => updateSelection("general")}>
          #general
        </Style.ChatroomButton>
        <Style.ChatroomButton onClick={() => updateSelection("bitcoin")}>
          #bitcoin
        </Style.ChatroomButton>
        <Style.ChatroomButton onClick={() => updateSelection("etheruem")}>
          #etheruem
        </Style.ChatroomButton>
        <Style.ChatroomButton onClick={() => updateSelection("litecoin")}>
          #litecoin
        </Style.ChatroomButton>
        <Style.ChatroomButton onClick={() => updateSelection("ripple")}>
          #ripple
        </Style.ChatroomButton>
      </Style.ChatRoomButtonContainer>
    </Style.ChatRoomButtonWrapper>
  );
};

export default ChatroomButtons;
