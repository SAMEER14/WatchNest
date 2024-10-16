import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const store = configureStore({
    //Takes reducer
    reducer: {
        app: appSlice,
    },
});

export default store;