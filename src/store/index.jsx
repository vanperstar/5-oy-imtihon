import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducer/user.slice.jsx";
import authSlice from "../modules/login/login-slice";

const store = configureStore({
    reducer: {
        users: userSlice,
        token: authSlice,
    }
})

export default store;