import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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

// export const addToCategory = createAsyncThunk(
//   "category/addToBuynow",
//   async (cartInfo: CartInfo) => {
//     await api.post("/category/add", {
//       userId: cartInfo.userId,
//       productId: cartInfo.productId,
//       quantity: 1,
//       status: false,
//     });
//     const responces: any = await api.get("/category/getAll/" + cartInfo.userId);

//     return responces.data as any;
//   }
// );

// export const deleteCategory = createAsyncThunk(
//   "buy/delete",
//   async (cartInfo: CartInfo) => {
//     await api.delete("/category/remove/" + cartInfo.productId);
//     const responces: any = await api.get("/category/getAll/" + cartInfo.userId);

//     return responces.data as any;
//   }
// );
const BuyNowSlice = createSlice({
  name: "buy",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCategory.fulfilled, (state, action) => {
      state.category = action.payload;
    });
    // builder.addCase(addToCategory.fulfilled, (state, action) => {
    //   state.category = action.payload;
    // });
  },
});
export default BuyNowSlice.reducer;
