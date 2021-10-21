import { configureStore } from "@reduxjs/toolkit";
import auth_api_slice from "./auth/auth_api_slice";
import buy_now_api_slice from "./buy_now/buy_now_api_slice";
import category_api_slice from "./category/category_api_slice";
import product_api_slice from "./product/product_api_slice";
import products_api_slice from "./products/products_api_slice";

export const store = configureStore({
  reducer: {
    auth: auth_api_slice,
    products: products_api_slice,
    product: product_api_slice,
    // cart: cart_api_slice,
    // wish: wishlist_api_slice,
    buynow: buy_now_api_slice,
    category: category_api_slice,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
