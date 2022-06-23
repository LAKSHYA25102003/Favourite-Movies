import { createSlice } from '@reduxjs/toolkit'



export const movieSlice=createSlice({
    name:"favMovie",
    initialState:{
        movies:[]
    },
    reducers:{
        ADD_MOVIES:(state,action)=>{
            state.movies=action.payload
        }
    }
})

export const {ADD_MOVIES}=movieSlice.actions;

export default movieSlice.reducer;