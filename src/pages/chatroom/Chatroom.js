import React, { useState, useEffect } from "react";
import * as Styles from "../Prices/prices.styles";
import * as Style from "./Chatroom.styles";
import BtcIcon from "../../assets/chatroomIcons/Bitcoin.png";
import firebase from "../../Firebase/Firebase";
import ChatroomForm from "./ChatroomForm";
import { formatDistanceToNow } from "date-fns";

const db = firebase.firestore();

// adding new chat documents
// setting up a real-time listener to get new chats
// updating the room
const ROOMS = {
  general: { chatroom: "general" },
  bitcoin: { chatroom: "bitcoin" },
  etheruem: { chatroom: "etheruem" },
  litecoin: { chatroom: "litecoin" },
  ripple: { chatroom: "ripple" }
};

const Chatroom = () => {
  const [selection, setSelection] = useState("general");
  const [loading, setLoading] = useState(false);
  const allChats = useChats();
  const [sortBy, setSortBy] = useState("GENERAL");
  const [room, setRoom] = useState("");
  const [username, setUsername] = useState();
  const [chats, setChats] = useState(db.collection("chats"));

  const updateSelection = select => {
    setSelection(select);
  };

  function useChats(room = selection) {
    const now = new Date();
    const [chats, setChats] = useState([]);
    console.log(ROOMS.ROOM);
    const [createdAt, setCreatedAt] = useState("");
    useEffect(() => {
      const unsubscribe = firebase
        .firestore()
        .collection("chats")
        .where("active_room", "==", ROOMS[room].chatroom)
        .orderBy("created_at")
        .onSnapshot(snapshot => {
          const newChats = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setRoom(ROOMS[room].chatroom);
          setChats(newChats);
          console.log(room);
        });
      return () => unsubscribe();
    }, [room]);
    return chats;
  }
  console.log(allChats);

  //this function makes the date look prettier
  // it is using the date-fns library

  const fixDate = dat => {
    var result = formatDistanceToNow(new Date(dat * 1000), { addSuffix: true });

    return result;
  };

  console.log(allChats);
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
                <Style.ChatroomButton
                  onClick={() => updateSelection("general")}
                >
                  #general
                </Style.ChatroomButton>
                <Style.ChatroomButton
                  onClick={() => updateSelection("bitcoin")}
                >
                  #bitcoin
                </Style.ChatroomButton>
                <Style.ChatroomButton
                  onClick={() => updateSelection("etheruem")}
                >
                  #etheruem
                </Style.ChatroomButton>
                <Style.ChatroomButton
                  onClick={() => updateSelection("litecoin")}
                >
                  #litecoin
                </Style.ChatroomButton>
                <Style.ChatroomButton onClick={() => updateSelection("ripple")}>
                  #ripple
                </Style.ChatroomButton>
              </Style.ChatRoomButtonContainer>
            </Style.ChatRoomButtonWrapper>
          </Style.ChatRooms>

          {/* chat list / window */}
          <div>
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
          </div>

          {/* new chat form */}
          <ChatroomForm allChats={allChats} room={room} />
        </Style.ChatroomWrapper>
      </Styles.HomepageWrapper>
    </Styles.HomeMainWrapper>
  );
};

export default Chatroom;
