import { createSlice } from '@reduxjs/toolkit'



export const movieSlice=createSlice({
    name:"favMovie",
    initialState:{
        moviesList:[],
        fav:[]
    },
    reducers:{
        ADD_MOVIES:(state,action)=>{
            state.moviesList=action.payload
        },
        ADD_FAV:(state,action)=>{
            state.fav=[action.payload,...state.fav]
        },
        DELETE_FAV:(state,action)=>{
            const ind=state.fav.indexOf(action.payload);
            state.fav.splice(ind,1);
        }
    }
})

export const {ADD_MOVIES,ADD_FAV,DELETE_FAV}=movieSlice.actions;

export default movieSlice.reducer;