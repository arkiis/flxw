import React, { Component } from "react";
import * as Styles from "./PaymentModuleStyles";
import PropTypes from "prop-types";
import { DeleteFollowing } from "../../pages/dashboard/dashboard.styles";
import ReactDOM from "react-dom";
import { InfoBody } from "../../pages/PriceDetail/PriceDetailStyles";

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
    // setTimeout(() => this.setState({ fadeType: "in",  }), `${this.props.time}`);
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.isOpen && prevProps.isOpen) {
      this.setState({ fadeType: "out" });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onEscKeyDown, false);
  }

  onEscKeyDown = e => {
    if (e.key !== "Escape") return;
    this.setState({ fadeType: "out" });
  };

  handleClick = e => {
    e.preventDefault();
    // this.props.toggleFadeType("out");

    this.props.onClose(!this.props.showModal);
  };
  render() {
    console.log(this.props.showModal);

    return !this.props.showModal
      ? null
      : ReactDOM.createPortal(
          <Styles.ModalContainer
            id={this.props.id}
            className={`wrapper fade-${this.props.fadeType} ${this.props.modalClass}`}
            role="dialog"
            fadeType={this.fadeType}
          >
            <Styles.Modal>
              <DeleteFollowing flxRight relativ onClick={this.handleClick} />
              <img style={{ width: "50%" }} src={this.props.image} />
              <Styles.HeadingContainer>
                <Styles.ModalH1>{this.props.heading}</Styles.ModalH1>
                <InfoBody>{this.props.subHeading}</InfoBody>
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
