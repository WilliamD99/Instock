import React from "react";
import LocationDetails from "./LocationDetails";
import LocationAll from "./LocationAll";
import { Switch, Route, useRouteMatch } from "react-router-dom";

export default function Location({ locations, inventory }) {
  let { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route
          exact
          path={path}
          render={() => <LocationAll locations={locations} />}
        ></Route>
        <Route
          path={`${path}/:id`}
          render={props => {
            const id = props.match.params.id;
            const matchLocation = locations.find(location => {
              return id === location.id;
            });
            const matchInv = inventory.find(items => {
              return id === items.id;
            });
            return (
              <LocationDetails location={matchLocation} items={matchInv} />
            );
          }}
        ></Route>
      </Switch>
    </div>
  );
}
