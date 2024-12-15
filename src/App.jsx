import "./App.css"
import { AddToCart, RemoveItem } from "./Icons"
import dessertsProducts from "./data.json"
import {Dessertebi} from "./Desertebi"
import {Cart} from "./Cart"
import { useState } from "react";




// console.log(dessertsProducts)




function App() {
  return <>
  <Dessertebi />
  <Cart />
  </>

}

export default App
