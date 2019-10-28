import styled from "styled-components";

export const ChatroomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: 100%;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 35px 24px 150px;
  @media ${props => props.theme.mediaQueries.medium} {
    padding: 0;
  }
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

  @media ${props => props.theme.mediaQueries.medium} {
    width: 100%;
  }
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
  transition: 0.4s all ease;

  &:focus {
    outline: none;
  }

  &:hover {
    transform: translateY(-5px);
    transition: 0.4s all ease;
  }
  @media ${props => props.theme.mediaQueries.medium} {
    padding: 5px;
  }
`;

export const ChatroomForm = styled.form`
  position: fixed;
  margin: 2% auto;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 800px;
  flex-grow: 1;
  @media ${props => props.theme.mediaQueries.medium} {
    width: 100%;
    margin: unset;
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
  @media ${props => props.theme.mediaQueries.medium} {
    display: none;
  }
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
  @media ${props => props.theme.mediaQueries.medium} {
    border-top-right-radius: unset;
    border-bottom-right-radius: unset;
  }
`;

export const ChatList = styled.ul`
  list-style: none;
  text-align: left;
  text-decoration: none;
`;

export const ChatListItems = styled.li`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #fff;
  font-size: 19px;
  color: #555;
  border-collapse: collapse;
  position: relative;

  /* border-top-width: 1px;
  border-top-style: solid;
  border-top-color: rgba(0, 0, 0, 0.12); */
  min-height: 66px;
  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 17px;
  }
`;
export const ChatListDiv = styled.div`
  font-weight: bold;
  font-size: 19px;
  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 18px !important;
  }
`;

export const ChatListDivWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & :last-child {
    margin-top: 8px;
  }
`;
export const ChatListDate = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 0.7em;
  color: #999;
  justify-content: flex-start;
`;
