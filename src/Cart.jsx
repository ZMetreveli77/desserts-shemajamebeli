import "./App.css"
import { EmptyCart, RemoveItem } from "./Icons";
import { useState } from "react";
import React from "react";
import {Dessertebi} from "./Desertebi"


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

    <div className="cart Emptycarti">
    <div><h1>Your Cart(0)</h1></div>
    <div><h4>Your added items will appear here</h4></div>
    <div className="empty-cart"><EmptyCart/></div>
    </div>
    
    
    </>
}

//! ეს არის Cart იმ შემთხვევაში თუ რაიმეს ჩავამატებთ
export const CartWithItems = ({ cartItems, setCartItems }) => {
  const [isProcessing, setIsProcessing] = useState(false);


  const handleDeleteCart = (item) => {
    setCartItems(cartItems.filter(cartItem => cartItem.name !== item.name));
  };


  //! როდესაც დავაჭერთ button-ს Confirm Order-ს წარწერა შეიცვლება Processing...-ით და ამოვა ალერთი რომ ჩვენი შეკვეთა დადასტურდა
  const handleConfirmOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setCartItems([]);
      setIsProcessing(false);
      alert("Order confirmed!");
    }, 2000);
  };

  




  //!  ეს ითვლის ჩვენი შეკვეთის ფასის სრულ ფასს
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);


  return (
    <div className=" cart cartWithItems">
      <h1 className="items-cart-h1">Your Cart ({cartItems.length})</h1>
      
      <ul className="cart-items">
      <button className="confirm" onClick={handleConfirmOrder}  disabled={isProcessing}>
      {isProcessing ? "Processing..." : "Confirm Order"}
      </button>
      <h1 className="order-total">Order Total: ${totalPrice.toFixed(2)}</h1>
        
        {cartItems.map((item) => (
          <li key={item.name}>
            <h2 className="item-name">{item.name}</h2>
            <p className="item-price">Price: ${item.price}</p>
            <button className="cart-remove" onClick={() => handleDeleteCart(item)}>
              <RemoveItem />
            </button>
          </li>
        ))}
      </ul>
      
      
      
    </div>
  );
};

export default Cart

