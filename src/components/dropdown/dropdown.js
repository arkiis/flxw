import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./dropdown.css";
import Icon from "../../assets/images/angle-up-solid.svg";

const SpanArrow = styled.span`
  transform: rotate(180deg);
  color: #1c1621;
  opacity: 0.7;
  margin-left: 2px;
`;

const DDContainer = styled.div`
  position: relative;
  display: inline-block;

  & :hover {
    cursor: pointer;
  }
`;

const DropDown = styled.div`
  position: absolute;
  transition: all 1s ease;
  top: 100%;
  left: -10px;
  width: 130px;
  z-index: 200;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
`;

const DDList = styled.li`
  padding: 15px 15px;
  background-color: white;
  width: 100%;

  transition: all ease 0.2s;
  &:hover {
    cursor: pointer;
    background-color: #6433ff;
    color: white;
    transition: all ease 0.2s;
  }
`;
const IconImg = styled.img`
  width: 10px;
  margin-bottom: 10px;
  transition: all ease 0.3s;
  transform: rotate(180deg);
`;

const DDUnordered = styled.ul`
  list-style: none;

  padding: 0;
  margin: 0;
`;
//this class component shows profile picture and
// shows the dropdown onclicked
// dropdown can link to settings page or logout page

export default class HeaderDropDown extends Component {
  DContainer = React.createRef();
  state = {
    open: false,
    rotate: false
  };

  handleClick = () => {
    this.setState(state => {
      return {
        open: !state.open,
        rotate: !state.rotate
      };
    });
  };
  handleClickOutside = event => {
    if (
      this.DContainer.current &&
      !this.DContainer.current.contains(event.target)
    ) {
      this.setState({
        open: false,
        rotate: false
      });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    let icon_class = this.state.rotate ? "rotate" : "";
    return (
      <DDContainer ref={this.DContainer}>
        <div onClick={this.handleClick}>
          <img src="https://img.icons8.com/material/50/000000/cat-profile.png" />

          <IconImg className={icon_class} src={Icon} />
        </div>
        {this.state.open && (
          <DropDown>
            <DDUnordered>
              <Link to="/account-settings" onClick={this.handleClick}>
                <DDList>Settings</DDList>
              </Link>
              <Link to="/logout">
                <DDList>Log Out</DDList>
              </Link>
            </DDUnordered>
          </DropDown>
        )}
      </DDContainer>
    );
  }
}
