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
        user: {
          _id: "617144ee3a3247f9524b5aae",
          email: "haider.n@somaiya.edu",
          password:
            "$2b$12$zF.Uy8RE1rMzM2mH09pS0uj6vKsLTn6wTPKI8cJdgG3OU1cS4MMkO",
          name: "haider",
          number: "23411",
        },
        jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzE0NGVlM2EzMjQ3Zjk1MjRiNWFhZSIsImlhdCI6MTYzNDgxMzE2NiwiZXhwIjoxNjM0ODk5NTY2fQ.9g7MFW3rIgiAwdZvKKUn7iwKWYAyT8psamHtQux-N08",
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
