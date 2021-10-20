
import React from 'react'
import { Link, useHistory} from 'react-router-dom'
import Card from '../../components/card/Card';
import './style.scss';

const Page1 = () =>{
  const history = useHistory();
  const name = 'Laptop';
  const categorie = 'Asus'
    return(
      <div>
        <div className='add-button'>
        <button onClick={()=>{history.push('/AddItem')}}>Add new item</button>
        </div>
        <div className="text-xl mx-20">Existing Products:</div>
      <div className='Discover-main'>
          <Card name={name} categorie={categorie} price={0} clickAction={()=>{history.push('/Cart')}} photoclick={()=>{history.push('/Product')}} />
      </div>
      </div>
    )
}

export default Page1;