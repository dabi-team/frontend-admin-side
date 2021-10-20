
import React from 'react'
import { Link, useHistory} from 'react-router-dom'
import Card from '../../components/card/Card';
import './style.scss';

const Page1 = () =>{
  const history = useHistory();
  const name = 'Laptop';
  const categorie = 'Asus'
    return(
      <div className='Discover-main'>
          <Card name={name} categorie={categorie} price={0} clickAction={()=>{history.push('/Cart')}} photoclick={()=>{history.push('/Product')}} />
      </div>
    )
}

export default Page1;