import React, { useState } from "react";
import { useHistory } from "react-router";
import { storage } from "../firebase";
import { useAppDispatch } from "../redux/hooks";
import { addProduct } from "../redux/products/products_api_slice";
import { field, ImageUpload, ProductType } from "../types/types";

const AddItem = () => {
  const dispatch = useAppDispatch();

  const ini: ProductType = {
    title: "",
    description: "",
    price: 0,
    discount: 0,
    category: "",
    images: [],
    quantity: 0,
  };
  const imgini: ImageUpload = {
    currentFile: undefined,
    previewImage: undefined,
    progress: 0,
    message: "",
    imageInfos: [],
  };
  const [image, setImage] = useState(imgini);
  const [Item, setItem] = useState(ini);
  const history = useHistory();
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItem({ ...Item, [event.target.name]: event.target.value });
  };
  const allFields: Array<field> = [
    {
      name: "title",
      statement: "Title of product",
      placeholder: "title",
      type: "string",
    },
    {
      name: "category",
      statement: "Category of product",
      placeholder: "Category",
      type: "string",
    },
    {
      name: "description",
      statement: "Discription of product",
      placeholder: "Description",
      type: "string",
    },
    {
      name: "quantity",
      statement: "Quantity of product",
      placeholder: "quantity",
      type: "number",
    },
    {
      name: "discont",
      statement: "Discount on product",
      placeholder: "discount",
      type: "number",
    },
    {
      name: "price",
      statement: "Price of product",
      placeholder: "price",
      type: "number",
    },
  ];
  const onSubmit = async (event: any) => {
    event.preventDefault();
    await upload();
    console.log(Item);
    dispatch(addProduct(Item));
    history.push("/");
  };
  const upload = async () => {
    if (image.currentFile == undefined) return;
    await storage
      .ref(`/images/${image.currentFile.name}`)
      .put(image.currentFile)
      .then((snapshot) => {
        return snapshot.ref.getDownloadURL(); // Will return a promise with the download link
      })
      .then((downloadURL) => {
        setImage({ ...image, message: downloadURL });
        setItem({ ...Item, images: [downloadURL] });
        console.log(
          `Successfully uploaded file and got download link - ${downloadURL}`
        );
        return downloadURL;
      })
      .catch((error) => {
        // Use to signal error if something goes wrong.
        console.log(`Failed to upload file and get link - ${error}`);
      });
  };
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage({
      ...image,
      currentFile: event?.target?.files?.[0],
      previewImage: URL.createObjectURL(event?.target?.files![0]),
    });
  };
  return (
    <div className="">
      <div className="white-card-cont shadow-lg text-center">
        <div className="p-15 mx-20">
          <div className="text-center text-3xl m-10">Fill in the details</div>
          {allFields.map((onefield) => (
            <div className="grid grid-cols-3 my-6 text-lg">
              <h5 className="text-left">{onefield.statement}</h5>
              <input
                className=" rounded-2xl col-span-2 p-3 bg-gray-100"
                name={onefield.name}
                id="email"
                type={onefield.type}
                placeholder={onefield.placeholder}
                onChange={onChange}
                required
              />
            </div>
          ))}
          <div className="grid grid-flow-col grid-cols-3">
            <div className="file-input">
              <input
                className="file"
                id="file"
                type="file"
                onChange={onFileChange}
              />
              <label htmlFor="file">Select file</label>
            </div>
            <div className="mx-8">
              <img className="preview" src={image.previewImage} alt="" />
            </div>
          </div>
          <button
            className=" bg-indigo-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-3xl m-5"
            onClick={onSubmit}
          >
            Add Item
          </button>
          <button
            className="bg-indigo-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-3xl m-5"
            onClick={upload}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
