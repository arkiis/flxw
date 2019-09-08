import React, { Component } from "react";
import axios from "axios";

class Apptest extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios.get("http://localhost:3001/api/coins").then(response => {
      console.log(response.data);
    });
  }

  render() {
    return <div></div>;
  }
}

export default Apptest;
