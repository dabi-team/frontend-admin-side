import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { field, ProductType } from '../types/types';


const AddItem = () =>{
    const ini:ProductType = {
        title: "",
        description: "",
        price: 0,
        discount: 0,
        category: '',
        images: [],
        quantity: 0
    }
    const [Item, setItem] = useState(ini);
    const history = useHistory();
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItem({...Item,[event.target.name]: event.target.value});
    };
    const allFields:Array<field> =[
        {name:'title',statement:'Title of product',placeholder:'title',type:'string'},
        {name:'category',statement:'Category of product',placeholder:'Category',type:'string'},
        {name:'description',statement:'Discription of product',placeholder:'Description',type:'string'},
        {name:'quantity',statement:'Quantity of product',placeholder:'quantity',type:'number'},
        {name:'discont',statement:'Discount on product',placeholder:'discount',type:'number'},
        {name:'price',statement:'Price of product',placeholder:'price',type:'number'},
    ]
    const onSubmit = (event:any) => {
        event.preventDefault();
        history.push('/');
    };
  return(
      <div className='login-box'>
       <div className='white-card-container shadow-lg text-center'>
           <div className="p-15 mx-20">
               <div className="text-center text-3xl m-10">Fill in the details</div> 
            {allFields.map((onefield) => (
                  <div className="grid grid-cols-3 my-6 text-lg">
                      <h5 className="text-left">{onefield.statement}</h5>
                      <input
                          className=" rounded-2xl col-span-2 p-3 bg-gray-100"
                          name={onefield.name}
                          id='email'
                          type={onefield.type}
                          placeholder={onefield.placeholder}
                          onChange={onChange}
                          required
                      />
                  </div>
                  ))}
                  <button className='m-7' onClick={onSubmit}>Add Item</button>
           </div>
       </div>
     </div>
    )
}

export default AddItem;