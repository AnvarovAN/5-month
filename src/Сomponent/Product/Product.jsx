import React from 'react'
import { useState } from 'react'

import { dataIcon } from "../../data/data"

import "./style.scss"

const Product = () => {

  const [state] = useState(dataIcon);
  console.log(state);

  return (
    <div className='Product' >
      {state.map((data) =>(
        <img key={data.id} src={data.img} alt="logo" />

      ))}
    </div>
  )
}

export default Product