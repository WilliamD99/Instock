import React from "react";
import Arrow from "../assets/Icons/SVG/Icon-back-arrow.svg";
import { Link } from "react-router-dom";

export default function LocationDetails({ locations }) {
  let contents = [];
  if (locations !== null) {
    locations.map((location, index) => {
      let main = (
        <div className="location-details__item-wrap" key={index}>
          <div className="location-details__title-wrap">
            <Link to="/location">
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
              <h2 className="location-details__info" key={index}>
                {location.contact.name}
              </h2>
              <h2 className="location-details__info-gap">
                {location.contact.title}
              </h2>
              <h2 className="location-details__info">
                {location.contact.phone}
              </h2>
              <h2 className="location-details__info">
                {location.contact.email}
              </h2>
            </div>
          </div>
        </div>
      );
      contents.push(main);
    });
  }

  return <section className="location-details">{contents}</section>;
