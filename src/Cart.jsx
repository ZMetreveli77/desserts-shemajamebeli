import "./App.css"
import { EmptyCart } from "./Icons";
import { useState } from "react";



export const Cart = () => {
    return <> 

    <div className="cart">
    <div><h1>Your Cart(0)</h1></div>
    <div><h4>Your added items will appear here</h4></div>
    <div className="empty-cart"><EmptyCart/></div>
    </div>
    
    
    </>
}

export default Cart

