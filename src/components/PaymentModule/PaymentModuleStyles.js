import styled from "styled-components";

export const Modal = styled.div`
  z-index: 1050;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity linear 0.15s;
  z-index: 2000;
  width: ${props => {
    switch (props.modalSize) {
      case "lg":
        return "800";
      default:
        return "480";
    }
  }}px;
  margin: 40px auto;
  &.fade-in {
    opacity: 1;
    transition: opacity linear 0.25s;
  }
  &.fade-out {
    opacity: 0;
    transition: opacity linear 0.25s;
  }
  .background {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 1040;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: 0;
  }
`;
