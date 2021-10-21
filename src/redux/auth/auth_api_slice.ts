import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../api";
import { Auth } from "./auth_api_model";

interface AuthState {
  auth?: Auth;
}
const user = localStorage.getItem("profile");
const usersState = user
  ? { auth: JSON.parse(user) }
  : {
      auth: {
        jwt: "",
        user: {
          _id: "",
          email: "",
          password: "",
          name: "",
          number: "",
        },
      },
    };
const initialState: AuthState = {
  ...usersState,
};
// const initialState: AuthState = {

// auth: {
//   jwt: "",
//   user: {
//     _id: "",
//     email: "",
//     password: "",
//   },
// },
// };
interface Credentials {
  email: string;
  password: string;
}
export const login = createAsyncThunk(
  "auth/login",
  async (cred: Credentials) => {
    const responce: any = await api.post("auth/login", {
      email: cred.email,
      password: cred.password,
    });

    console.log(responce.data);
    return responce.data as any;
  }
);

export const sign = createAsyncThunk("auth/signup", async (cred: any) => {
  const responce: any = await api.post("auth/signup", {
    ...cred,
  });

  return responce.data as any;
});
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.auth = action.payload;
      localStorage.setItem("profile", JSON.stringify({ ...state.auth }));
    });
    builder.addCase(sign.fulfilled, (state, action) => {
      localStorage.setItem("profile", JSON.stringify({ ...state.auth }));
      state.auth = action.payload;
    });
  },
});
export default CartSlice.reducer;
