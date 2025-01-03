import "./App.css"
import dessertsProducts from "./data.json"
import Cart from "./Cart"
import { useState } from "react";
import { AddToCart} from "./Icons"

const BASE_URL = "https://res.cloudinary.com/dc2c49xov/desserts/"


export const Dessertebi = () => {
    return <div className="app">
    <h1 className="title">Desserts</h1>
    <div className="main"> 
    

    {dessertsProducts.map((dessert) => {
      return (
       
           <div className="card" key={dessert.name}>
          
          
          <img src={BASE_URL + dessert.images.desktop} alt="" />
          <button className="add-to-cart"><AddToCart/>Add to Cart</button>
          <div className="about-dessert">
          <p>{dessert.category}</p>
          <h2>{dessert.name}</h2>
          <h2 className="price">${dessert.price}</h2> 
          </div>
           
        </div>
        
       
      );
    })}
   </div> 
  </div>
}