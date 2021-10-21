import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../api";
import { BuyNow } from "./buy_now_model";

interface BuyNoState {
  buynow: BuyNow[];
}
const initialState: BuyNoState = {
  buynow: [],
};

export const fetchAllBuy = createAsyncThunk(
  "buynow/getAllProduct",
  async () => {
    const responce: any = await api.get("/buynow/getAll/");
    return responce.data as any;
  }
);
interface CartInfo {
  userId: string;
  productId: string;
}
export const addToBuy = createAsyncThunk(
  "buynow/addToBuynow",
  async (cartInfo: CartInfo) => {
    await api.post("/buynow/add", {
      userId: cartInfo.userId,
      productId: cartInfo.productId,
      quantity: 1,
      status: false,
    });
    const responces: any = await api.get("/buynow/getAll/" + cartInfo.userId);

    return responces.data as any;
  }
);

export const deleteInBuy = createAsyncThunk(
  "buy/delete",
  async (cartInfo: CartInfo) => {
    await api.delete("/buynow/remove/" + cartInfo.productId);
    const responces: any = await api.get("/buynow/getAll/" + cartInfo.userId);

    return responces.data as any;
  }
);
const BuyNowSlice = createSlice({
  name: "buy",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllBuy.fulfilled, (state, action) => {
      state.buynow = action.payload;
    });
    builder.addCase(addToBuy.fulfilled, (state, action) => {
      state.buynow = action.payload;
    });
  },
});
export default BuyNowSlice.reducer;
