import styled from "styled-components";

export const ChatroomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: 100%;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 35px 24px 150px;
`;

export const ChatroomHeader = styled.h1`
  width: 100%;
  font-size: 34px;
`;

export const ChatRooms = styled.div`
  margin: 24px 0;
  display: flex;
  flex-direction: column;
`;

export const ChatRoomButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 27px;
`;

export const ChatRoomButtonContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const ChatroomButton = styled.button`
  background: #6433ff;
  color: white;
  outline: none;
  cursor: pointer;
  box-shadow: none;
  padding: 14px;
  border-radius: 7px;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;

  margin-top: 14px;
  flex-grow: 1;
`;
export const LabelMessage = styled.div`
  border: 1px solid #4a4a4a80;
  opacity: 0.9;
  border-right: none;
  display: flex;
  align-items: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background: #edeff2;
  justify-content: center;
  flex-grow: 0.5;
`;
export const ChatInput = styled.input`
  flex-grow: 4;
  padding: 10px 0px;
`;
export const ChatSubmit = styled.input`
  flex-grow: 0.5;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background: #6433ff;
  color: white;
  outline: none;
  box-shadow: none;
  padding: 14px;
`;

export const ChatList = styled.ul`
  list-style: none;
  text-decoration: none;
`;
