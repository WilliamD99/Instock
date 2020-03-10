import React from "react";
import Arrow from "../assets/Icons/SVG/Icon-back-arrow.svg";
import { Link } from "react-router-dom";
import checkStatus from "../helpers/checkStatus";

export default function LocationDetails({ location, items }) {
  let contents = [];
  let inventoryItems = [];
  let main = (
    <div className="location-details__detail-location-wrap" key={location.id}>
      <div className="location-details__item-wrap">
        <div className="location-details__title-wrap">
          <Link to="/locations">
            <img className="location-details__icon" src={Arrow} alt="Arrow" />
          </Link>
          <h1 className="location-details__section-title">{location.name}</h1>
        </div>
        <div className="location-details__item">
          <div className="location-details__address-wrap">
            <h5 className="location-details__label">Address</h5>
            <h2 className="location-details__info">
              {location.address.street}
            </h2>
            <h2 className="location-details__info-gap">
              {location.address.number}
            </h2>
            <h2 className="location-details__info">
              {location.address.city}, {location.address.province}
            </h2>
            <h2 className="location-details__info">
              {location.address.postal}, {location.address.country}
            </h2>
          </div>
          <div className="location-details__contact-wrap">
            <h5 className="location-details__label">Contact</h5>
            <h2 className="location-details__info">{location.contact.name}</h2>
            <h2 className="location-details__info-gap">
              {location.contact.title}
            </h2>
            <h2 className="location-details__info">{location.contact.phone}</h2>
            <h2 className="location-details__info">{location.contact.email}</h2>
          </div>
        </div>
      </div>
    </div>
  );
  let htmlContructor = content => {
    let renderItems = items.items.map(item => {
      let html = (
        <div className="inventory__content-bg" key={item.ref}>
          <div className="inventory__item">
            <div className="inventory__product-item-wrap">
              <div className="inventory__item-button-wrap">
                <h5 className="inventory__label">Item</h5>
              </div>
              <h2 className="inventory__name">{item.name}</h2>
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
        </div>
      );
      return html;
    });
    inventoryItems.push(renderItems);
    return renderItems;
  };
  htmlContructor(items.items);
  contents.push(main);
  return (
    <>
      <section className="location-details">{contents}</section>
      <section className="inventory__bg">{inventoryItems}</section>
    </>
  );
}
