import React from "react";

export default function Product(props) {
  console.log(props);
  const inventoryArray = [
    {
      id: "123456",
      items: [
        {
          ref: "JK2020FD7811201",
          name: "Product Name 1",
          description:
            "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.",
          date: "1549152000",
          client: "Mark Saunders",
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
          <div className="product__item">
            <div className="product__product-item-wrap">
              <h5 className="product__label">Item Description</h5>
              <h2 className="product__description">
                {objectsList.description}
              </h2>
            </div>
            <div className="product__desktop-wrap">
              <div className="product__client-wrap">
                <h5 className="product__label">Ordered By</h5>
                <h2 className="product__client">{objectsList.client}</h2>
              </div>
              <div className="product__reference-wrap">
                <h5 className="product__label">Reference Number</h5>
                <h2 className="product__reference">{objectsList.ref}</h2>
              </div>
              <div className="product__order-wrap">
                <h5 className="product__label">Last Ordered</h5>
                <h2 className="product__date">{objectsList.date}</h2>
              </div>
              <div className="product__location-wrap">
                <h5 className="product__label">Location</h5>
                <h2 className="product__location">
                  {objectsList.location.city}, {objectsList.location.country}
                </h2>
              </div>
              <div className="product__quantity-wrap">
                <h5 className="product__label">Quantity</h5>
                <h2 className="product__quantity">{objectsList.quantity}</h2>
              </div>
              <div className="product__status-wrap">
                <h5 className="product__label">Categories</h5>
                <h2 className="product__status">{objectsList.status}</h2>
              </div>
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
    <section className="product">
      <div className="product__top-wrap">
        <h1 className="product__section-title">Product Name 1</h1>
        <button className="product__stock-button">In Stock</button>
      </div>
      <div className="product__item-wrap">{listOfItems}</div>
      <div className="product__edit-button-wrap">
        <button className="product__edit-button">EDIT</button>
      </div>
    </section>
  );
}
