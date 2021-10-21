import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AddCategory from "../../Admin/addCategory";
import { api } from "../api";
import { Category } from "./category_api_model";

interface CategoryState {
  category: Category[];
}
const initialState: CategoryState = {
  category: [],
};

export const fetchAllCategory = createAsyncThunk(
  "category/getAllProduct",
  async () => {
    const responce: any = await api.get("/category/getAll/");
    console.log(responce);

    return responce.data as any;
  }
);
export const addCategory = createAsyncThunk(
  "category/addCat",
  async (cartInfo: any) => {
    await api.post("/category/add", cartInfo);
    const responce: any = await api.get("/category/getAll");

    return responce.data as any;
  }
);

const BuyNowSlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCategory.fulfilled, (state, action) => {
      state.category = action.payload;
    });
    builder.addCase(addCategory.fulfilled, (state, action) => {
      state.category = action.payload;
    });
    // builder.addCase(addToCategory.fulfilled, (state, action) => {
    //   state.category = action.payload;
    // });
  },
});
export default BuyNowSlice.reducer;
