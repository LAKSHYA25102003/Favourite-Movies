import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./FavMovie";

const Store= configureStore({
    reducer:{
        favMovie:movieReducer
    }
});

export default Store;