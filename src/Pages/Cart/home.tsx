import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import HorizontalCard from '../../components/Horizontalcard/Card';
import './style.scss';
 
const Cart = () =>{
  const location = useLocation();
    return(
      <div className='mx-12'>
          <h1 className='text-xl px-9 poppins'>Your Cart:</h1>
          <HorizontalCard/>
          <HorizontalCard/>
      </div>
    )
}

export default Cart;