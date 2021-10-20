
import React from "react";
import logo from '../../logo.svg';
import './style.scss'
interface CardProp{
  name:string,
  categorie:string,
  description:string,
  clickAction: React.MouseEventHandler,
}
const CategorieCard = (prop:CardProp) => {
    return(
  <div className='horizontal-card-container shadow-lg grid grid-flow-col'>
     <div className='details-container col-span-6' onClick={prop.clickAction}>
            <div className='text-xl mb-1'>{prop.name}</div>
            <div>{prop.categorie}</div>
            <div className="description">{prop.description}
            </div>
       </div>
     <img src={logo} alt='laptop' className='col-span-1'/>
     <img src={logo} alt='laptop' className='col-span-1'/>
 </div>   
    ) 
}

export default CategorieCard;