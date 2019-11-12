import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  z-index: 3000;
  position: absolute;
  justify-content: center;
  max-width: 900px;
  height: 30vh;
`;

export const ModalContainer = styled.div`
  opacity: ${props => {
    switch (props.fadeType) {
      case "in":
        return 1;
      default:
        return "0";
    }
  }};
  transition: ${props => {
    switch (props.fadeType) {
      case "in":
        return `opacity linear 0.25s;`;
      case "out":
        return `opacity linear 0.25s;`;
      default:
        return "";
    }
  }};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(28, 22, 33, 0.8);

  width: 100%;
  z-index: 90;
  height: 100%;
`;
