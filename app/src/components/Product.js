import React from "react";
import checkStatus from "../helpers/checkStatus";

export default function Product({ item }) {
  let content = (
    <div className="product__item">
      <div className="product__product-item-wrap">
        <h5 className="product__label">Item Description</h5>
        <h2 className="product__description">{item.description}</h2>
      </div>
      <div className="product__desktop-wrap">
        <div className="product__client-wrap">
          <h5 className="product__label">Ordered By</h5>
          <h2 className="product__client">{item.client}</h2>
        </div>
        <div className="product__reference-wrap">
          <h5 className="product__label">Reference Number</h5>
          <h2 className="product__reference">{item.ref}</h2>
        </div>
        <div className="product__order-wrap">
          <h5 className="product__label">Last Ordered</h5>
          <h2 className="product__date">{item.date}</h2>
        </div>
        <div className="product__location-wrap">
          <h5 className="product__label">Location</h5>
          <h2 className="product__location">
            {item.location.city}, {item.location.country}
          </h2>
        </div>
        <div className="product__quantity-wrap">
          <h5 className="product__label">Quantity</h5>
          <h2 className="product__quantity">
            {parseInt(item.quantity).toLocaleString()}
          </h2>
        </div>
        <div className="product__status-wrap">
          <h5 className="product__label">Categories</h5>
          <h2 className="product__status">{item.categories.join(", ")}</h2>
        </div>
      </div>
    </div>
  );

  return (
    <section className="product">
      <div className="product__top-wrap">
        <h1 className="product__section-title">{item.name}</h1>
        <button className="product__stock-button">
          {checkStatus(item.status)}
        </button>
      </div>
      <div className="product__item-wrap">{content}</div>
      <div className="product__edit-button-wrap">
        <button className="product__edit-button">EDIT</button>
      </div>
    </section>
  );
}
