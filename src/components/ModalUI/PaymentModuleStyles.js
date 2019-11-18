import styled from "styled-components";

export const Modal = styled.div`
  z-index: 1050;
  display: flex;
  position: fixed;
  border-radius: 6px;
  flex-direction: column;
  padding: 20px;
  overflow: hidden;
  background-color: white;
  box-shadow: rgba(218, 225, 233, 0.557) 0px 8px 16px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 22px;
  justify-content: space-between;

  h1 {
    font-size: 19px !important;
  }
`;
export const ModalImage = styled.img`
  width: 62px;
  margin-bottom: 14px;
`;

export const ModalItemsContainer = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: 120px 120px 120px;
  grid-gap: 10px;
  color: #1c1621;
  margin: 0 auto;
`;

export const ModalItems = styled.div`
  border-top: 3px solid #6433ff;
  position: relative;
  background-color: white;
  box-shadow: rgba(218, 225, 233, 1) 0px 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  height: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  opacity: 0.8;
  transition: all ease 0.2s;

  span {
    font-size: 16px;
    font-weight: lighter;
    font-weight: 500;
  }
  &:hover {
    opacity: 1;
  }
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
