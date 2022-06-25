import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./FavMovie";
import searcReducer from "./Search"

const Store= configureStore({
    reducer:{
        favMovie:movieReducer,
        search:searcReducer
    }
});

export default Store;