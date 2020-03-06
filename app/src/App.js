import React, { Component } from "react";
import "./styles/main.css";
import Location from "./components/Location";
import Modal from "./components/Modal";
import Header from "./components/Header";
import API from "./helpers/API";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: null
    };
  }
  async componentDidMount() {
    let dataObjects = await API.get("locations/");
    let data = dataObjects.data;
    this.setState({
      locations: data
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Modal />
        <Location locations={this.state.locations} />
      </div>
    );
  }
}
export default App;
