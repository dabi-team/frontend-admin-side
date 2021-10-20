
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './style.scss';
import logo from '../../logo.svg';

const Account = () =>{
  const location = useLocation();
    return(
    <div className='nav-container'>
       <div className='white-card-container shadow-lg text-center '>
           <div className='grid grid-flow-row gap-4 content-center p-20 m-7'>
            <img src={logo} alt='laptop'/>
            <div className="text-5xl p-5">Prashant Mishra</div>
            <div className="text-2xl p-3">Prashant.om@somaiya.edu</div>
            <div className="text-2xl p-3">9458945945884</div>
           </div>
       </div> 
    </div>
    )
}

export default Account;