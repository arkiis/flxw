import React, { useState, useEffect } from "react";
import * as Styles from "../Prices/prices.styles";
import * as Style from "./Chatroom.styles";
import firebase from "../../Firebase/Firebase";
import ChatroomForm from "./ChatroomForm";
import { formatDistanceToNow } from "date-fns";
import ChatroomButtons from "./ChatroomButtons";
import ChatLists from "./ChatLists";

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
  const allChats = useChats();
  const [room, setRoom] = useState("");

  //this function is to change the room based on
  //what the argument string is.
  const updateSelection = select => {
    setSelection(select);
  };
  //this function is grabbing data from firebase and
  //placing that data depending on which room it's subscribed to

  function useChats(room = selection) {
    const [chats, setChats] = useState([]);
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
        });
      return () => unsubscribe();
    }, [room]);
    //this is to re render everytime the room
    //state updates
    return chats;
  }

  //this function makes the date look prettier
  // it is using the date-fns library

  const fixDate = dat => {
    var result = formatDistanceToNow(new Date(dat * 1000), { addSuffix: true });
    return result;
  };

  return (
    //container & title
    <Styles.HomeMainWrapper>
      <Styles.HomepageWrapper>
        <Style.ChatroomWrapper>
          <Style.ChatroomHeader>Crypto Chat</Style.ChatroomHeader>

          {/* buttons and heading for chatrooms */}
          <Style.ChatRooms>
            <div>Choose a chatroom:</div>
            <ChatroomButtons updateSelection={updateSelection} />
          </Style.ChatRooms>

          {/* chat list / window */}
          <div>
            <ChatLists allChats={allChats} fixDate={fixDate} />
          </div>

          {/* new chat form */}
          <ChatroomForm allChats={allChats} room={room} />
        </Style.ChatroomWrapper>
      </Styles.HomepageWrapper>
    </Styles.HomeMainWrapper>
  );
};

export default Chatroom;
