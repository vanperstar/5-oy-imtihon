import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducer/user.slice";

const store = configureStore({
    reducer: {
        users: userSlice,
    }
})

export default store;