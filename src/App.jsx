import React from "react";
import { useState } from "react";
import Product from "./Сomponent/Product/Product";
import Navbar from "./Сomponent/Navbar/Navbar";
import Sidebar from "./Сomponent/SideBar/Sidebar";
import {barIcon} from "./data/data";

import ProductInfo from "./Сomponent/ProductInfo/ProductInfo";
import './App.css'




function App() {

  const [menu] = useState(barIcon);



  return (
    <div className="App">
      
      <header>
        <Navbar  />
      </header>
      <main className="main">
        <Sidebar
        icon={menu.map((item)=>
        (<img className="main__barIcon"
         src={item.icon} alt="logo"
         />
         ))} 
         id={menu.map((id)=>{id.id})}
         name={menu.map((item)=>
          (<p className="barName">{item.name}</p>))}
         />
        <ProductInfo/>
      </main>

    </div>
    
  )
}

export default App
