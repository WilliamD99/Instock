import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import ArrowRight from "../assets/Icons/SVG/Icon-arrow-right.svg";

export default function LocationAll({ locations }) {
  let { url } = useRouteMatch();
  let contents = [];
  if (locations !== null) {
    locations.map((location, index) => {
      let categories = location.categories.join(", ");
      let main = (
        <div className="location__item" key={index}>
          <div className="location__warehouse-wrap">
            <div className="location__title-button-wrap">
              <h5 className="location__label">Warehouse</h5>
              <Link to={`${url}/${location.id}`}>
                <img
                  className="location-details__icon"
                  src={ArrowRight}
                  alt="Arrow Right"
                />
              </Link>
            </div>
            <h2 className="location__name">{location.name}</h2>
            <h2 className="location__info">{location.address.street}</h2>
          </div>
          <div className="location__contact-wrap">
            <h5 className="location__label">Contact</h5>
            <h2 className="location__info" key={index}>
              {location.contact.name}
            </h2>
            <h2 className="location__contact-title">
              {location.contact.title}
            </h2>
          </div>
          <div className="location__information-wrap">
            <h5 className="location__label">Contact Information</h5>
            <h2 className="location__info">{location.contact.phone}</h2>
            <h2 className="location__info">{location.contact.email}</h2>
          </div>
          <div className="location__categories-wrap">
            <h5 className="location__label">Categories</h5>
            <h2 className="location__info">{categories}</h2>
          </div>
        </div>
      );
      contents.push(main);
      return contents;
    });
  }

  return (
    <section className="location">
      <div className="location__top-wrap">
        <h1 className="location__section-title">Locations</h1>
        <form className="location__form" id="form">
          <input
            className="location__input"
            type="text"
            name="search"
            placeholder="Search"
            required=""
          ></input>
        </form>
      </div>
      <div className="location__item-wrap">{contents}</div>
    </section>
  );
}
