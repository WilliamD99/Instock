import React, { Component } from "react";
import "./styles/main.css";
import Location from "./components/Location";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Inventory from "./components/Inventory";
import API from "./helpers/API";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

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
      <Router>
        <Header />
        <Switch>
          <Redirect from="/" to="/locations" exact />
          <Route
            path="/locations"
            render={() => <Location locations={this.state.locations} />}
          ></Route>
          <Route path="/inventory" component={Inventory}></Route>
          <Modal />
        </Switch>
      </Router>
    );
  }
}
export default App;
