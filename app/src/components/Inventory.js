import React from "react";
import Modal from "./Modal";
import checkStatus from "../helpers/checkStatus";

export default function Inventory({ inventory }) {
  let main = [];
  let htmlContructor = content => {
    let items = content.items;
    let renderItems = items.map(item => {
      let html = (
        <div className="inventory__item" key={item.ref}>
          <div className="inventory__warehouse-wrap">
            <h5 className="inventory__label">Item</h5>
            <div className="inventory__warehouse-button-wrap">
              <h2 className="inventory__name">{item.name}</h2>
              <p>{item.description}</p>
              <button className="inventory__button">></button>

            </div>
            <h5 className="inventory__label">Location</h5>
            <h2 className="inventory__info">
              {`${item.location.city}, ${item.location.country} `}
            </h2>
          </div>
          <div className="inventory__contact-wrap">
            <h5 className="inventory__label">Last Ordered</h5>
            <h2 className="inventory__order">{item.date}</h2>

            <h5 className="inventory__label">Quantity</h5>
            <h2 className="inventory__contact-title">
              {parseInt(item.quantity).toLocaleString()}
            </h2>
          </div>
          <div className="inventory__information-wrap">
            <h5 className="inventory__label">Status</h5>
            <h2 className="inventory__info">{checkStatus(item.status)}</h2>
          </div>
          <div className="inventory__categories-wrap">
            <h5 className="inventory__label">Categories</h5>
            <h2 className="inventory__info">{item.categories.join(", ")}</h2>
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
  );
}
