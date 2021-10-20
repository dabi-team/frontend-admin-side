
import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import CategorieCard from '../../components/Categorie/CategorieCard';
import './style.scss';

const Page2 = () =>{
  const location = useLocation();
  const history = useHistory();
  const name = 'Laptop';
  const cat= 'Asus';
  const description =' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit nemo velit nam? Aliquam optio voluptatem corrupti cupiditate error quas molestias dolor, commodi modi nihil, magni, doloribus voluptatum quae voluptatibus qui.'
    return(
      <div className='mx-12'>
          <CategorieCard name={name} description={description} categorie={cat} clickAction={()=>{history.push('/')}}  />
      </div>
    )
}

export default Page2;