import { configureStore } from "@reduxjs/toolkit";
import { clothSlice } from "./slices/clothSlice";
export const store = configureStore({
    reducer: {
        products: clothSlice.reducer
    }
})