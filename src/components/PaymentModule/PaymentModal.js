import React, { useState, useEffect } from "react";
import * as Styles from "./PaymentModuleStyles";
import { DeleteFollowing } from "../../pages/dashboard/dashboard.styles";
import ReactDOM from "react-dom";

//where our portal lies
const modalRoot = document.getElementById("modal-root");

const PaymentModal = props => {
  const [fadeType, setFadeType] = useState(null);
  useEffect(() => {
    setTimeout(() => setFadeType("in"), 0);
    window.addEventListener("keydown", onEscKeyDown, false);
  }, []);

  const onEscKeyDown = e => {
    if (e.key !== "Escape") return;
    setFadeType("out");
  };

  const transitionEnd = e => {
    if (e.propertyName !== "opacity" || fadeType === "in") return;

    if (fadeType === "out") {
      props.setToggle(!props.isToggle);
    }
  };
  const handleClick = e => {
    e.preventDefault();
    setFadeType("out");
  };

  return ReactDOM.createPortal(
    <Styles.ModalContainer
      onClick={handleClick}
      onTransitionEnd={transitionEnd}
      fadeType={fadeType}
      style={{ display: props.isToggle ? "flex" : "none" }}
    >
      <Styles.Modal>
        <h1>Choose Payment Method</h1>
        <DeleteFollowing onClick={handleClick} />
        {props.allCoins.map(coin => {
          return <p>{coin.name}</p>;
        })}
      </Styles.Modal>
    </Styles.ModalContainer>,

    modalRoot
  );
};

export default PaymentModal;
