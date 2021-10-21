import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../api";

import { Product } from "./products_model";
interface ProductState {
  products: Product[];
}
const initialState: ProductState = {
  products: [],
};

export const fetchAllProducts = createAsyncThunk("product/getAll", async () => {
  const responce: any = await api.get("/product/getAll");
  console.log(responce.data);
  return responce.data as any;
});
export const fetchAllProductsCat = createAsyncThunk(
  "product/getAllCaat",
  async (cat: string) => {
    const responce: any = await api.get("/product/getAll/" + cat);
    console.log(responce.data);
    return responce.data as any;
  }
);
export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (cartInfo: any) => {
    await api.post("/product/add", cartInfo);
    const responce: any = await api.get("/product/getAll");

    return responce.data as any;
  }
);
// export const fetchProductById = createAsyncThunk(
//   "product/fetchProductById",
//   async (id: string) => {
//     const responce: any = await api.get("/product/getById");
//     console.log(responce.data);
//     return responce.data as any;
//   }
// );

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(fetchAllProductsCat.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});
export default productSlice.reducer;
