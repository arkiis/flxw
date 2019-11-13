import React, { Component } from "react";
import * as Styles from "./PaymentModuleStyles";
import PropTypes from "prop-types";
import { DeleteFollowing } from "../../pages/dashboard/dashboard.styles";
import ReactDOM from "react-dom";

//where our portal lies
const modalRoot = document.getElementById("modal-root");

class PaymentModal extends Component {
  static defaultProps = {
    id: "",
    modalClass: "",
    modalSize: "md"
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    modalClass: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    modalSize: PropTypes.string
  };

  state = {
    fadeType: null
  };

  background = React.createRef();

  componentDidMount() {
    window.addEventListener("keydown", this.onEscKeyDown, false);
    setTimeout(() => this.setState({ fadeType: "in" }), 0);
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.isOpen && prevProps.isOpen) {
      this.setState({ fadeType: "out" });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onEscKeyDown, false);
  }
  transitionEnd = e => {
    if (e.propertyName !== "opacity" || this.state.fadeType === "in") return;

    if (this.state.fadeType === "out") {
      this.props.onClose();
    }
  };
  onEscKeyDown = e => {
    if (e.key !== "Escape") return;
    this.setState({ fadeType: "out" });
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({ fadeType: "out" });
  };
  render() {
    return ReactDOM.createPortal(
      <Styles.ModalContainer
        id={this.props.id}
        className={`wrapper fade-${this.state.fadeType} ${this.props.modalClass}`}
        role="dialog"
        fadeType={this.fadeType}
        onTransitionEnd={this.transitionEnd}
      >
        <Styles.Modal>
          <Styles.HeadingContainer>
            <h1>Choose Payment Method</h1>
            <DeleteFollowing noPos onClick={this.handleClick} />
          </Styles.HeadingContainer>
          {this.props.allCoins.map(coin => {
            return <p>{coin.name}</p>;
          })}
        </Styles.Modal>
        <div
          className={`background`}
          onMouseDown={this.handleClick}
          ref={this.background}
        />
      </Styles.ModalContainer>,

      modalRoot
    );
  }
}

PaymentModal.defaultProps = {
  fadeType: "out"
};

export default PaymentModal;
