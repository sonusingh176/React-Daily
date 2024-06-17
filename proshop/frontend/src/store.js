import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlices";

const store =configureStore({
    reducer: {
        [apiSlice.reducerPath]:apiSlice.reducerPath,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true,
})

export default store;