import React from "react";

export default function Inventory() {
  const inventoryArray = [
    {
      id: "123456",
      items: [
        {
          ref: "JK2020FD7811201",
          name: "Product Name 1",
          description:
            "Here is a very brief description of the product in the inventory...",
          date: "1549152000",
          location: {
            city: "Toronto",
            country: "CAN"
          },
          quantity: "12000",
          status: "In Stock",
          categories: [
            "Industrial",
            "Automotive",
            "Heavy",
            "Mechanical",
            "Engineering",
            "Transportation",
            "Sales"
          ]
        }
      ]
    },
    {
      id: "123456",
      items: [
        {
          ref: "JK2020FD7811201",
          name: "Product Name 2",
          description:
            "Here is a very brief description of the product in the inventory...",
          date: "1549152000",
          location: {
            city: "Toronto",
            country: "CAN"
          },
          quantity: "12000",
          status: "In Stock",
          categories: [
            "Industrial",
            "Automotive",
            "Heavy",
            "Mechanical",
            "Engineering",
            "Transportation",
            "Sales"
          ]
        }
      ]
    },
    {
      id: "123456",
      items: [
        {
          ref: "JK2020FD7811201",
          name: "Product Name 2",
          description:
            "Here is a very brief description of the product in the inventory...",
          date: "1549152000",
          location: {
            city: "Toronto",
            country: "CAN"
          },
          quantity: "12000",
          status: "In Stock",
          categories: [
            "Industrial",
            "Automotive",
            "Heavy",
            "Mechanical",
            "Engineering",
            "Transportation",
            "Sales"
          ]
        }
      ]
    }
  ];

  console.log(inventoryArray);
  const listOfItems = inventoryArray.map((listItems, index) => {
    console.log(listItems);

    const itemsObject = inventoryArray[index].items.map(
      (objectsList, index) => {
        console.log(objectsList.name);
        //map through categories here
        return (
          <div className="inventory__item">
            <div className="inventory__product-item-wrap">
              <div className="inventory__item-button-wrap">
                <h5 className="inventory__label">Item</h5>
                <button className="inventory__button">></button>
              </div>
              <h2 className="inventory__name">{objectsList.name}</h2>
              <h2 className="inventory__description">
                {objectsList.description}
              </h2>
            </div>
            <div className="inventory__order-wrap">
              <h5 className="inventory__label">Last Ordered</h5>
              <h2 className="inventory__date">{objectsList.date}</h2>
            </div>
            <div className="inventory__location-wrap">
              <h5 className="inventory__label">Location</h5>
              <h2 className="inventory__location">
                {objectsList.location.city}, {objectsList.location.country}
              </h2>
            </div>
            <div className="inventory__quantity-wrap">
              <h5 className="inventory__label">Quantity</h5>
              <h2 className="inventory__quantity">{objectsList.quantity}</h2>
            </div>
            <div className="inventory__status-wrap">
              <h5 className="inventory__label">Status</h5>
              <h2 className="inventory__status">{objectsList.status}</h2>
            </div>
          </div>
        );
      }
    );
    /* const listOfCategories = itemsObject.map((listData, index) => {
      let data = listData.listData + ", ";
      console.log(data);
      return data;
    }); */

    return itemsObject;
  });

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
      <div className="inventory__item-wrap">{listOfItems}</div>
    </section>
  );
}
