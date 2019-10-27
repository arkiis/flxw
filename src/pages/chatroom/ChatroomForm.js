import React, { useState, useEffect } from "react";
import * as Style from "./Chatroom.styles";
import firebase from "../../Firebase/Firebase";

const ChatroomForm = props => {
  const now = new Date();
  const today = firebase.firestore.Timestamp.fromDate(now);

  const currentUser = firebase.auth().currentUser.email;
  const [user, setUser] = useState(currentUser);

  const [message, setMessage] = useState("");
  const [created_at, setCreated_at] = useState(today);
  const [active_room, setActiveRoom] = useState("");
  console.log(props);
  console.log(firebase.auth());
  useEffect(() => {
    setActiveRoom(props.room);
  }, [props.room]);

  function onSubmit(e) {
    e.preventDefault();
    firebase
      .firestore()
      .collection("chats")
      .add({
        message,
        user,
        created_at,
        active_room
      })
      .then(() => {
        setMessage("");
        setCreated_at(today);
        setActiveRoom(props.room);
      });
  }
  return (
    <form onSubmit={onSubmit}>
      <Style.FormWrapper>
        {/* input group */}
        <Style.LabelMessage>
          <div>Your message:</div>
        </Style.LabelMessage>
        <Style.ChatInput
          type="text"
          value={message}
          onChange={e => setMessage(e.currentTarget.value)}
        />

        <Style.ChatSubmit type="submit" value="send" />
      </Style.FormWrapper>
    </form>
  );
};

export default ChatroomForm;
