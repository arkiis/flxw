import React, { useState } from "react";
import * as Styles from "../Prices/prices.styles";
import * as Style from "./Chatroom.styles";
import BtcIcon from "../../assets/chatroomIcons/Bitcoin.png";
import firebase from "../../Firebase/Firebase";
const db = firebase.firestore();

// adding new chat documents
// setting up a real-time listener to get new chats
// updating the room

class Chat {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = db.collection("chats");
    this.unsub = "";
  }
  async addChat(message) {
    //format a chat object
    const now = new Date();
    const chat = {
      message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now)
    };
    // save the chat document
    const response = await this.chats.add(chat);
    return response;
  }
  getChats(callback) {
    this.unsub = this.chats
      .where("room", "==", this.room)
      .orderBy("created_at")
      .onSnapshot(snapchat => {
        snapchat.docChanges().forEach(change => {
          if (change.type === "added") {
            // update the UI
            callback(change.doc.data());
          }
        });
      });
  }
  updateRoom(room) {
    this.room = room;
    console.log("room updated");
    if (this.unsub) {
      this.unsub();
    }
  }
}

const Chatroom = () => {
  const [room, setRoom] = useState();
  const [username, setUsername] = useState();
  const [chats, setChats] = useState(db.collection("chats"));

  // get chats and render
  const newChat = new Chat("gaming", "shaun");

  const okay = newChat.getChats(data => {
    console.log(data);
    return <li>{data.username}</li>;
  });
  return (
    //container & title
    <Styles.HomeMainWrapper>
      <Styles.HomepageWrapper>
        <Style.ChatroomWrapper>
          <Style.ChatroomHeader>Crypto Chat</Style.ChatroomHeader>

          {/* buttons for chatrooms */}
          <Style.ChatRooms>
            <div>Choose a chatroom:</div>
            <Style.ChatRoomButtonWrapper>
              <Style.ChatRoomButtonContainer>
                <Style.ChatroomButton>#general</Style.ChatroomButton>
                <Style.ChatroomButton>#bitcoin</Style.ChatroomButton>
                <Style.ChatroomButton>#etheruem</Style.ChatroomButton>
                <Style.ChatroomButton>#litecoin</Style.ChatroomButton>
                <Style.ChatroomButton>#xrp</Style.ChatroomButton>
              </Style.ChatRoomButtonContainer>
            </Style.ChatRoomButtonWrapper>
          </Style.ChatRooms>

          {/* chat list / window */}
          <div>
            <Style.ChatList className="chat-list">{okay}</Style.ChatList>
          </div>

          {/* new chat form */}
          <form>
            <Style.FormWrapper>
              {/* input group */}
              <Style.LabelMessage>
                <div>Your message:</div>
              </Style.LabelMessage>
              <Style.ChatInput type="text" required />

              <Style.ChatSubmit type="submit" value="send" />
            </Style.FormWrapper>
          </form>
        </Style.ChatroomWrapper>
      </Styles.HomepageWrapper>
    </Styles.HomeMainWrapper>
  );
};

export default Chatroom;
