import React from "react";
import logo from '../../logo.svg';
import './style.scss';
import {BsFillCartPlusFill} from 'react-icons/bs';

interface CardProp{
  name:string,
  categorie:string,
  price:number,
  clickAction: React.MouseEventHandler<HTMLButtonElement>,
  photoclick: React.MouseEventHandler,
}

const Card = (props:CardProp) => {
    return(
  <div className='card-container shadow-lg'>
     <img src={logo} alt='laptop' onClick={props.photoclick}/>
     <div className='details-container'>
       <div className='text-xl mb-1'>{props.name}</div>
        <div className="description">{props.categorie}</div>
        <div className="buying flex justify-between">
          <div className="price text-lg pt-2">${props.price}</div>
          <div className="flex">
            <button onClick={props.clickAction}><BsFillCartPlusFill/></button>
          </div>
        </div>
       </div>
 </div>   
    ) 
}

export default Card