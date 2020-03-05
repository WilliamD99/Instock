import React, { Component } from "react";
import { revealModal, cancel } from "../helpers/toggleModal";

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
  handleChange = event => {
    const target = event.target;
    if (target.type !== "checkbox") {
      this.setState({
        [target.name]: target.value
      });
    } else {
      if (this.state.status === false) {
        this.setState({
          status: true
        });
      } else {
        this.setState({
          status: false
        });
      }
    }
  };
  render() {
    return (
      <>
        <button className="create-button" onClick={revealModal}>
          +
        </button>
        <div className="modal-wraper">
          <div className="modal" id="modal">
            <h1 className="modal__title">Create New</h1>
            <form className="modal__form">
              <div className="modal__form--input">
                <label htmlFor="product-name">Product</label>
                <input
                  type="input"
                  name="product-name"
                  placeholder="Item Name"
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="modal__form--input">
                <label htmlFor="last-order">Last Ordered</label>
                <input
                  type="date"
                  name="last-order"
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="modal__form--input">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="modal__form--input">
                <label htmlFor="country">Country</label>
                <select
                  name="country"
                  className="select-country"
                  onChange={this.handleChange}
                >
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                  <option value="france">France</option>
                  <option value="china">China</option>
                </select>
              </div>
              <div className="modal__form--input">
                <label htmlFor="quantity">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="0"
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="modal__form--input">
                <label>Status</label>
                <div className="switch-container">
                  <p>In Stock</p>
                  <input
                    type="checkbox"
                    id="switch"
                    onClick={this.handleChange}
                    value="false"
                    name="switch"
                  ></input>
                  <label htmlFor="switch"></label>
                </div>
              </div>
              <div className="modal__form--input">
                <label htmlFor="description">Item Description</label>
                <textarea
                  name="description"
                  placeholder="(Optional)"
                  onChange={this.handleChange}
                ></textarea>

                <div className="modal__form--input-button">
                  <input type="button" value="SAVE" id="save"></input>
                  <button id="cancel" onClick={cancel}>
                    CANCEL
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
