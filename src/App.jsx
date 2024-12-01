import "./App.css"
import { AddToCart, RemoveItem } from "./Icons"
import dessertsProducts from "./data.json"

// console.log(dessertsProducts)

const BASE_URL = "https://res.cloudinary.com/dc2c49xov/desserts/"

function App() {
  return <>

    <h1>Hello World <AddToCart /></h1>
    {/* <img src={BASE_URL + "waffle-desktop.jpg"} alt="" /> */}

    {dessertsProducts.map((dessert) => {
      return (
        <div key={dessert.name}>
          <h2>{dessert.name}</h2>
          <img src={BASE_URL + dessert.images.desktop} alt="" />
        </div>
      );
    })}




    
    <RemoveItem />
   </> 
}

export default App
