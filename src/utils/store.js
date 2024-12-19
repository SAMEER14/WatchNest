import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
    //Takes reducer
    reducer: {
        app: appSlice,
        search: searchSlice
    },
});

export default store;