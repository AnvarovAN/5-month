import React from 'react'
import "./App.css"
import Vite from "../public/vite.svg"
import react from "./assets/react.svg"
 
 const App = () => {
   return (
     <div>
        <div className="logo">
        <img className='logo' src={Vite} alt="" />
        +
        <img className='logo' src={react} alt="" />
        </div>
     </div>
   )
 }
 
 export default App