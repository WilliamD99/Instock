import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
// import details from "../helpers/details";
import Product from "../components/Product";
import InventoryAll from "../components/InventoryAll";

export default function Inventory({ inventory }) {
  let { path } = useRouteMatch();
  return (
    <>
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
            const location = inventory.find(matchId => {
              return id === matchId.id;
            });

            const item = location.items.find(matchRef => {
              return ref === matchRef.ref;
            });
            return <Product item={item} />;
          }}
        ></Route>
      </Switch>
    </>
  );
}
