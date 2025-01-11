import "./App.css"
import { EmptyCart, RemoveItem } from "./Icons";
import { useState } from "react";
import React from "react";


//! თუ ცარიელია EmptyCarts გამოვა თუ რამეს დავამატებთ CartWithItems
export const Cart = ({ cartItems }) => {   
    if (cartItems.length === 0) {
      return <EmptyCarts />;
    } else {
      return <CartWithItems cartItems={cartItems} />;
    }
  };

//!   ეს არის Cart იმ შემთხვევაში თუ ცარიელია 
export const EmptyCarts = () => {
    return <> 

    <div className="cart">
    <div><h1>Your Cart(0)</h1></div>
    <div><h4>Your added items will appear here</h4></div>
    <div className="empty-cart"><EmptyCart/></div>
    </div>
    
    
    </>
}

//! ეს არის Cart იმ შემთხვევაში თუ რაიმეს ჩავამატებთ
export const CartWithItems = ({ cartItems }) => {
   
    const handleRemoveFromCart = (item) => {
        setCartItems(cartItems.filter((cartItem) => cartItem !== item));
        delete quantity[item.name];
      };
    return (
      <div className="cart">
        <h1 className="items-cart-h1">Your Cart ({cartItems.length})</h1>
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.name}>
              <h2 className="item-name">{item.name}</h2>
              <p className="item-price">Price: ${item.price}</p>
              <button className="cart-remove" onClick={() => handleRemoveFromCart(item)}> <RemoveItem/></button>
            </li>
          ))}
        </ul>
        
        <button className="confirm">Confirm Order</button>
      </div>
    );
  };

export default Cart

