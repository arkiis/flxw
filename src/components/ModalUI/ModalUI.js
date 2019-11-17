import React, { Component } from "react";
import * as Styles from "./PaymentModuleStyles";
import PropTypes from "prop-types";
import { DeleteFollowing } from "../../pages/dashboard/dashboard.styles";
import ReactDOM from "react-dom";

//where the React portal lies
const modalRoot = document.getElementById("modal-root");

class ModalUI extends Component {
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
    setTimeout(() => this.setState({ fadeType: "in" }), 2000);
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
    console.log(this.state.fadeType);
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
            <h1>{this.props.heading}</h1>
            <DeleteFollowing relativ onClick={this.handleClick} />
          </Styles.HeadingContainer>
          {this.props.children}
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

ModalUI.defaultProps = {
  fadeType: "out"
};

export default ModalUI;
