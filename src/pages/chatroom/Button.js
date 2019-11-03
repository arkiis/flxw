import React from "react";
import * as Style from "./Chatroom.styles";

const Button = ({ children, room, updateSelection }) => {
  return (
    <Style.ChatroomButton>
      <span onClick={() => updateSelection(room)}>{children}</span>
    </Style.ChatroomButton>
  );
};

export default Button;
