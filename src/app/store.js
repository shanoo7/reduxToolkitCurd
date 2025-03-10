import { configureStore } from "@reduxjs/toolkit";
import userDetailsSlice from "./slices/userDetailsSlice";

export const store = configureStore({
reducer:{
    app: userDetailsSlice,
}
})