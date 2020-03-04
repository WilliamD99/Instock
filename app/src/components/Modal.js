import React, { Component } from "react";
import toggleModal from "../helpers/toggleModal";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      date: null,
      city: null,
      country: null,
      quantity: null,
      status: false,
      description: null
    };
  }
  stockStatus = () => {};

  render() {
    return (
      <div className="modal" id="modal">
        <h1 className="modal__title">Create New</h1>
        <form className="modal__form">
          <div className="modal__form--input">
            <label htmlFor="product-name">Product</label>
            <input
              type="input"
              name="product-name"
              placeholder="Item Name"
            ></input>
          </div>
          <div className="modal__form--input">
            <label htmlFor="last-order">Last Ordered</label>
            <input type="date" name="last-order"></input>
          </div>
          <div className="modal__form--input">
            <label htmlFor="city">City</label>
            <input type="text" name="city" placeholder="City"></input>
          </div>
          <div className="modal__form--input">
            <label htmlFor="country">Country</label>
            <select name="country" className="select-country">
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
              <option value="france">France</option>
              <option value="china">China</option>
            </select>
          </div>
          <div className="modal__form--input">
            <label htmlFor="quantity">Quantity</label>
            <input type="number" name="quantity" placeholder="0"></input>
          </div>
          <div className="modal__form--input">
            <label>Status</label>
            <div className="switch-container">
              <p>In Stock</p>
              <input
                type="checkbox"
                id="switch"
                onClick={this.stockStatus}
              ></input>
              <label htmlFor="switch"></label>
            </div>
          </div>
          <div className="modal__form--input">
            <label htmlFor="description">Item Description</label>
            <textarea name="description"></textarea>
          </div>
          <div className="modal__form--button">
            <input
              type="button"
              value="SAVE"
              className="modal__form--button-save"
            ></input>
            <button
              className="modal__form--button-cancel"
              onClick={toggleModal}
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    );
  }
}
