import React from "react";
import logo from '../../logo.svg';
import './style.scss'
const HorizontalCard = () => {
    return(
  <div className='horizontal-card-container shadow-lg grid grid-flow-col'>
     <img src={logo} alt='laptop' className='col-span-1'/>
     <div className='details-container col-span-12'>
        <div className="buying flex justify-between">
          <div>
            <div className='text-xl mb-1'>laptop</div>
            <div className="description">Asus</div>
          </div>
          <div className="price text-lg font-bold pt-2">$1000</div>
        </div>
         <button className='mt-4' >Remove from cart</button>
       </div>
 </div>   
    ) 
}

export default HorizontalCard