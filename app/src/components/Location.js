import React from "react";

export default function Location() {
  const locationsArray = [
    {
      id: "123456",
      name: "Warehouse Number 1",
      address: {
        street: "123 Main Street W",
        number: "Suite 201",
        postal: "M65GB7",
        city: "Toronto",
        province: "ON",
        country: "CA"
      },
      contact: {
        name: "Mara Weinberg",
        title: "Warehouse Manager",
        phone: "604-354-0232",
        email: "weinberg@instock.com"
      },
      categories: [
        "Industrial",
        "Automotive",
        "Heavy",
        "Mechanical",
        "Engineering"
      ]
    },
    {
      id: "123456",
      name: "Warehouse Number 1",
      address: {
        street: "123 Main Street W",
        number: "Suite 201",
        postal: "M65GB7",
        city: "Toronto",
        province: "ON",
        country: "CA"
      },
      contact: {
        name: "Mara Weinberg",
        title: "Warehouse Manager",
        phone: "604-354-0232",
        email: "weinberg@instock.com"
      },
      categories: [
        "Industrial",
        "Automotive",
        "Heavy",
        "Mechanical",
        "Engineering"
      ]
    },
    {
      id: "123456",
      name: "Warehouse Number 1",
      address: {
        street: "123 Main Street W",
        number: "Suite 201",
        postal: "M65GB7",
        city: "Toronto",
        province: "ON",
        country: "CA"
      },
      contact: {
        name: "Mara Weinberg",
        title: "Warehouse Manager",
        phone: "604-354-0232",
        email: "weinberg@instock.com"
      },
      categories: [
        "Industrial",
        "Automotive",
        "Heavy",
        "Mechanical",
        "Engineering"
      ]
    }
  ];

  /* console.log(locationsArray[0].categories); */
  const listOfLocations = locationsArray.map((listData, index) => {
    const categoriesObject = locationsArray[index].categories.map(
      (listData, index) => {
        /* console.log(listData); */
        return {
          listData
        };
      }
    );
    const listOfCategories = categoriesObject.map((listData, index) => {
      let data = listData.listData + ", ";
      console.log(data);
      return data;
    });

    return (
      <div className="location__item">
        <div className="location__warehouse-wrap">
          <h5 className="location__label">Warehouse</h5>
          <div className="location__warehouse-button-wrap">
            <h2 className="location__name" key={index}>
              {listData.name}
            </h2>
            <button className="location__button">></button>
          </div>
          <h2 className="location__info" key={index}>
            {listData.address.street}
          </h2>
        </div>
        <div className="location__contact-wrap">
          <h5 className="location__label">Contact</h5>
          <h2 className="location__info" key={index}>
            {listData.contact.name}
          </h2>
          <h2 className="location__contact-title" key={index}>
            {listData.contact.title}
          </h2>
        </div>
        <div className="location__information-wrap">
          <h5 className="location__label">Contact Information</h5>
          <h2 className="location__info" key={index}>
            {listData.contact.phone}
          </h2>
          <h2 className="location__info" key={index}>
            {listData.contact.email}
          </h2>
        </div>
        <div className="location__categories-wrap">
          <h5 className="location__label">Categories</h5>
          <h2 className="location__info" key={index}>
            {listOfCategories}
          </h2>
        </div>
      </div>
    );
  });

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
      <div className="location__item-wrap">{listOfLocations}</div>
    </section>
  );
}
