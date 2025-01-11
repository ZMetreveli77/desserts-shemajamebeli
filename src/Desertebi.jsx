import "./App.css"
import dessertsProducts from "./data.json"
import Cart from "./Cart"
import { useState } from "react";
import { AddToCart} from "./Icons"
import React from "react";
import { DecrementQuantity, IncrementQuantity } from "./Icons";

const BASE_URL = "https://res.cloudinary.com/dc2c49xov/desserts/"


export const Dessertebi = () => {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState({});

  //! ეს გვაძლევს შესაძლებლობას რომ არჩეული პროდუქტი ჩავამატოთ კალათაში
  const handleAddToCart = (item) => {
    const existingQuantity = quantity[item.name];
    const newQuantity = existingQuantity ? existingQuantity + 1 : 1;
    setQuantity({ ...quantity, [item.name]: newQuantity });
    setCartItems([...cartItems, item]);
  };

  //! ეს, როდესაც buttons დავაჭერთ იმ შემთხვევაში გვაძლევს შესაძლებლობას რომ მისი რაოდენობა შევამციროთ ან სრულიად ამოვშალოთ
  const handleRemoveFromCart = (item) => {
    const newQuantity = quantity[item.name] - 1;
    if (newQuantity === 0) {
      delete quantity[item.name];
    } else {
      setQuantity({ ...quantity, [item.name]: newQuantity });
    }
    setCartItems(cartItems.filter((cartItem) => cartItem !== item));
  };

  //! ეს, როდესაც buttons დავაჭერთ იმ შემთხვევაში გვაძლევს შესაძლებლობას რომ მისი რაოდენობა გავზარდოთ
  const handleAddMore = (item) => {
    const newQuantity = quantity[item.name] + 1;
    setQuantity({ ...quantity, [item.name]: newQuantity });
    setCartItems([...cartItems, item]);
  };

  return (
    <div className="app">
      <h1 className="title">Desserts</h1>
      <div className="main">
        {dessertsProducts.map((dessert) => (
          <div className="{`card ${cartItems.includes(dessert) ? 'added-to-cart' : ''}`" key={dessert.name}>
            
            <img src={BASE_URL + dessert.images.desktop} alt="" />
            {quantity[dessert.name] ? (
              <div className="cart-button">
                <button
                  type="button" 
                  className="remove-from-cart incdc-btn"
                  onClick={() => handleRemoveFromCart(dessert)}
                >
                  <DecrementQuantity />
                </button>
                <span className="quantity">{quantity[dessert.name]}</span>
                <button
                  type="button"
                  className="add-more incdc-btn"
                  onClick={() => handleAddMore(dessert)}
                >
                  <IncrementQuantity />
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="add-to-cart "
                onClick={() => handleAddToCart(dessert)}
              >
                <AddToCart /> Add to Cart
              </button>
            )}
            <div className="about-dessert">
              <p>{dessert.category}</p>
              <h2>{dessert.name}</h2>
              <h2 className="price">${dessert.price}</h2>
            </div>
          </div>
        ))}
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
};