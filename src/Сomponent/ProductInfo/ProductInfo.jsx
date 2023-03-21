import React from 'react'
import "./productInfo.scss"

const ProductInfo = () => {
  return (
    <div className="main__right">
      <div className="infoBox">
        <div className="infoLeft">
          <h1 className="infoTitle"><span className='infoGreen'>In Stock</span>/ <span className='infoOrange'>Low In Stock</span> / <span className='infoRedx`'>Not Available</span> / Pre-Order</h1>
          <p className="infoPS">PS4</p>
          <p className="infoQ">Quantity: 10 | RM 249.00 per copy</p>
          <div className="infoBtn">
            <button className='infoADD'>Add</button>
            <button className='InfoAbout'>info</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo