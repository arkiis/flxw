import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = styled.div`
  width: 100%;
  z-index: 4000;
  top: 0;
  position: fixed;
  height: 100vh;

  padding: 12px;
  background-color: #1c162195;
`;

const HomeModal = ({ children }) =>
  ReactDOM.createPortal(
    <Modal>{children}</Modal>,
    document.getElementById("modal-root")
  );

export default HomeModal;
