import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { storage } from '../firebase';
import { CatType, field, ImageUpload, ProductType } from '../types/types';


const AddCategory = () =>{
    const ini:CatType = {
        title: "",
        description: "",
        images: [],
    }
    const imgini:ImageUpload = {
        currentFile: undefined,
        previewImage: undefined,
        progress: 0,
        message: '',
        imageInfos: [],
    }
    const [image , setImage] = useState(imgini);
    const [Cate, setCate] = useState(ini);
    const history = useHistory();
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCate({...Cate,[event.target.name]: event.target.value});
    };
    const allFields:Array<field> =[
        {name:'title',statement:'Title of product',placeholder:'title',type:'string'},
        {name:'description',statement:'Discription of product',placeholder:'Description',type:'string'},
    ]
    const onSubmit = async (event:any) => {
        event.preventDefault();
        const url = await upload()
        console.log(url);
        console.log(Cate);
        history.push('/Categories');
    };
    const upload = async ()=>{
     if(image.currentFile == undefined)
       return '';
     await storage.ref(`/images/${image.currentFile.name}`).put(image.currentFile)
     .then(async snapshot => {
       const downurl = await snapshot.ref.getDownloadURL(); 
       return downurl;   // Will return a promise with the download link
   })
   .then(async downloadURL => {
       setImage({...image , message:downloadURL})
       setCate({ ...Cate, images: [downloadURL] });
      console.log(`Successfully uploaded file and got download link - ${downloadURL}`);
      return downloadURL;
   })
   .catch(error => { 
      // Use to signal error if something goes wrong.
      console.log(`Failed to upload file and get link - ${error}`);
   });
    }
    const onFileChange  = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImage( {...image , 
                        currentFile: event?.target?.files?.[0],
                        previewImage: URL.createObjectURL(event?.target?.files?.[0])});
    };
  return(
      <div className=''>
       <div className='white-card-cont shadow-lg text-center'> 
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
                  <div className='grid grid-flow-col grid-cols-3'>
                    <div className="file-input">
                        <input className="file" id="file" type="file" onChange={onFileChange} />
                        <label htmlFor="file">Select file</label>
                    </div>
                    <div className='mx-8'>
                         <img className="preview" src={image.previewImage} alt="" />
                    </div>
                </div>
                  <button className=' bg-indigo-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-3xl m-5' onClick={onSubmit}>Add Item</button>
                  <button className='bg-indigo-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-3xl m-5' onClick={upload}>Upload</button>
           </div>
       </div>
     </div>
    )
}

export default AddCategory;