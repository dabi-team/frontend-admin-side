import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './style.scss';
import logo from '../../logo.svg';
import {BsFillCartPlusFill} from 'react-icons/bs'

const Product = () =>{
  const location = useLocation();
    return(
    <div className='nav-container'>
       <div className='white-card-container shadow-lg '>
            <img src={logo} alt='laptop'/>
           <div className='grid grid-flow-row gap-4 p-20 m-7'>
            <div className="text-xl p-2">Lenovo laptop</div>
            <div className="text-xl p-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi perferendis quo ullam temporibus, officia debitis atque repudiandae labore. Rerum tenetur incidunt quo, iusto ullam architecto excepturi quibusdam voluptatem labore non!</div>
            <div className="text-xl p-2">$1000</div>
          <div className="flex">
            <button>Now Buy</button>
            <button className='flex'><BsFillCartPlusFill className='mr-4'/>Add to Cart</button>
          </div>
           </div>
       </div> 
    </div>
    )
}

export default Product;