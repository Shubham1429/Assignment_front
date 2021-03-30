import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: {},
    };
  }

  sendRequest = async () => {
    try {
      await axios({
        method: "GET",
        url: "http://localhost:2929/getData",
        headers: {
          crossDomain: true,
          "Content-Type": "application/json",
        },
      }).then((res) => this.setState({ apiData: res }));
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.sendRequest();
  }

  render() {
    return <Form data={this.state.apiData} />;
  }
}

export default App;
