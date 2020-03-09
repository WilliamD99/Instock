import React from "react";
import Modal from "./Modal";
import checkStatus from "../helpers/checkStatus";
import { Link, useRouteMatch } from "react-router-dom";

export default function InventoryAll({ inventory }) {
  let { url } = useRouteMatch();
  let main = [];
  let htmlContructor = content => {
    let items = content.items;
    let renderItems = items.map(item => {
      let html = (
        <div className="inventory__item" key={item.ref}>
          <div className="inventory__product-item-wrap">
            <div className="inventory__item-button-wrap">
              <h5 className="inventory__label">Item</h5>
              <button className="inventory__button">></button>
            </div>
            <h2 className="inventory__name">
              <Link to={`${url}/${content.id}/items/${item.ref}`}>
                {item.name}
              </Link>
            </h2>
            <h2 className="inventory__description">{item.description}</h2>
          </div>
          <div className="inventory__order-wrap">
            <h5 className="inventory__label">Last Ordered</h5>
            <h2 className=" inventory__date">{item.date}</h2>
          </div>
          <div className=" inventory__location-wrap">
            <h5 className="inventory__label">Location</h5>
            <h2 className=" inventory__location">
              {item.location.city}, {item.location.country}
            </h2>
          </div>
          <div className=" inventory__quantity-wrap">
            <h5 className="inventory__label">Quantity</h5>
            <h2 className=" inventory__quantity">
              {parseInt(item.quantity).toLocaleString()}
            </h2>
          </div>
          <div className=" inventory__status-wrap">
            <h5 className="inventory__label">Status</h5>
            <h2 className=" inventory__status">{checkStatus(item.status)}</h2>
          </div>
        </div>
      );
      return html;
    });
    main.push(renderItems);
    return renderItems;
  };
  for (const content of inventory) {
    htmlContructor(content);
  }
  return (
    <>
      <section className="inventory">
        <div className="inventory__top-wrap">
          <h1 className="inventory__section-title">Inventory</h1>
          <form className="inventory__form" id="form">
            <input
              className="inventory__input"
              type="text"
              name="search"
              placeholder="Search"
              required=""
            ></input>
          </form>
        </div>
        <div className="inventory__item-wrap">{main.flat(Infinity)}</div>
        <Modal />
      </section>
    </>
  );
}
