import React from "react";
import checkStatus from "../helpers/checkStatus";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
// import details from "../helpers/details";
import Product from "../components/Product";
import InventoryAll from "../components/InventoryAll";

export default function Inventory({ inventory }) {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route
          exact
          path={path}
          render={() => <InventoryAll inventory={inventory} />}
        />
        <Route
          path={`${path}/:id/items/:ref`}
          render={props => {
            const id = props.match.params.id;
            const ref = props.match.params.ref;

            console.log(inventory);
          }}
        ></Route>
      </Switch>
    </div>
  );
}
