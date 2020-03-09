import React, { Component } from "react";
import "./styles/main.css";
import Location from "./components/Location";
import LocationDetails from "./components/LocationDetails";
import Header from "./components/Header";
import API from "./helpers/API";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Inventory from "./components/Inventory";

class App extends Component {
  state = {
    locations: null,
    inventory: null
  };
  async componentDidMount() {
    let locationObjects = await API.get("locations/");
    let inventoryObjects = await API.get("inventory/");

    let locationData = locationObjects.data;
    let inventoryData = inventoryObjects.data;

    this.setState({
      locations: locationData,
      inventory: inventoryData
    });
  }
  render() {
    if (this.state.locations === null || this.state.inventory === null) {
      return <h1>Loading ...</h1>;
    } else {
      return (
        <Router>
          <Header />
          <Switch>
            <Redirect from="/" to="/locations" exact />
            <Route
              path="/locations"
              render={() => (
                <Location
                  locations={this.state.locations}
                  inventory={this.state.inventory}
                />
              )}
            ></Route>
            <Route
              path="/inventory"
              render={() => <Inventory inventory={this.state.inventory} />}
            ></Route>
          </Switch>
        </Router>
      );
    }
  }
}
export default App;
