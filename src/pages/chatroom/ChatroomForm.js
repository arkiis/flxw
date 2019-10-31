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

  useEffect(() => {
    setActiveRoom(props.room);
  }, [props.room]);

  //function takes state data and adds it
  //to the chat collection on firebase when user sends message

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
    <Style.ChatroomForm onSubmit={onSubmit}>
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
    </Style.ChatroomForm>
  );
};

export default ChatroomForm;
