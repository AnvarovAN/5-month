import React from 'react'
import "./productInfo.scss"
import Img from "../../assets/image3.png"
const ProductInfo = () => {
  return (
    <div className="main__right">
      <div className="infoBox">
        <div className="infoLeft">
          <h3 className="infoTitle"><span className='infoGreen'>In Stock</span>/ <span className='infoOrange'>Low In Stock</span> / <span className='infoRedx`'>Not Available</span> / Pre-Order</h3>
          <p className="infoPS">PS4</p>
          <p className="infoQ">Quantity: 10 | RM 249.00 per copy</p>
          <div className="infoBtn">
            <button className='infoADD'>Add</button>
            <button className='InfoAbout'>info</button>
          </div>
        </div>
        <div className="infoImg">
              <img src={Img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ProductInfo