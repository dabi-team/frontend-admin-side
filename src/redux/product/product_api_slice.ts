import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../api";
import { Product } from "../products/products_model";

interface ProductState {
  product: Product;
}
const initialState: ProductState = {
  product: {
    _id: "",
    category: "",
    description: "",
    discount: 0,
    images: [],
    price: 0,
    quantity: 0,
    title: "",
  },
};

export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (id: string) => {
    const responce: any = await api.get("/product/getById/" + id);
    console.log(responce.data);
    return responce.data as any;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});
export default productSlice.reducer;
