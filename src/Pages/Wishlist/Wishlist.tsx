import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import HorizontalCard from '../../components/Horizontalcard/Card';
import logo from '../../logo.svg';
// import './style.scss';

const Wishlist = () =>{
  const location = useLocation();
    return(
      <div className='mx-12'>
          <h1 className='text-xl px-9 poppins'>Your Wishlist:</h1>
            <div className='horizontal-card-container shadow-lg grid grid-flow-col'>
                <img src={logo} alt='laptop' className='col-span-1'/>
                <div className='details-container col-span-12'>
                    <div className="buying flex justify-between">
                    <div>
                        <div className='font-bold text-xl mb-1'>laptop</div>
                        <div className="description">Asus</div>
                    </div>
                    <div className="price text-lg font-bold pt-2">$1000</div>
                    </div>
                    <button className='mt-4' >add to cart</button>
                </div>
            </div> 
      </div>
    )
}

export default Wishlist;

