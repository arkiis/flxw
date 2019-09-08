import React, { Component } from "react";
import axios from "axios";

export default class ApiTest extends Component {
  state = {
    data: [],
    isloading: true
  };

  componentWillMount() {
    axios.get("/api/users").then(response => {
      console.log(response.data);
    });

    axios.get("/api/cars").then(response => {
      console.log(response.data);
    });

    axios.get("/api/latest").then(response => {
      this.setState({
        data: response.data,
        isloading: false
      });
      console.log(response.data);
    });
  }

  render() {
    return <div>Hello</div>;
  }
}
