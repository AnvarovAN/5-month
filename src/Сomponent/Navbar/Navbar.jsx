import React from "react"
import { useState } from "react";
import {navbarList, homeLogo, barIcon} from "../../data/data";
import "../Navbar/navbar.scss";
import "../../globalStyle/global.scss";
const Navbar = () => {
  const [navList] = useState(navbarList);
  const [logo] = useState(homeLogo);
  
  // const [modal, setModal] = React.useState(true)

  return (
    <>
    <div className="header__wrapper">
        {logo.map((items)=>(
          <div  className="header__logo">
        <img  key={items.id} className='header__img' src={items.img} alt="" />
        <p key={items.id+1} className="header__title">{items.name}</p>
        <button className="header__icon"><i class="fa-solid fa-bars"></i></button>
      </div>
        ))}
    <nav className='header__nav'>
      <ul className="header__list">
        {navList.map((list)=>(
          <li key={list.id}  className="header__nav__item">{list.name}</li>
          ))}
      </ul>
    </nav>
    </div>
    
    </>
  )
}

export default Navbar