import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../assets/breadcrum_arrow.png';
import Product from '../../Pages/Product';
const Breadcrum = (props) => {
    const {product}= props;
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt=""/> SHOP <img src={arrow_icon} alt=""/> {Product.category} <img src={arrow_icon} alt=""/> {Product.name}
    </div>
  )
}

export default Breadcrum
