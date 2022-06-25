import { createSlice } from '@reduxjs/toolkit'



export const movieSlice=createSlice({
    name:"favMovie",
    initialState:{
        moviesList:[],
        fav:[],
        showFav:false
    },
    reducers:{
        ADD_MOVIES:(state,action)=>{
            state.moviesList=action.payload
        },
        ADD_FAV:(state,action)=>{
            state.fav=[action.payload,...state.fav]
        },
        DELETE_FAV:(state,action)=>{
            const filteredArray=state.fav.filter((movie)=>{
                return (movie.Title!==action.payload.Title);
            })
            state.fav=filteredArray;
        },
        changeShowFav:(state,action)=>{
            state.showFav=action.payload;
        },
        ADD_MOVIE_TO_THE_LIST:(state,action)=>{
            state.moviesList=[action.payload,...state.moviesList];
        }
    }
})

export const {ADD_MOVIES,ADD_FAV,DELETE_FAV,changeShowFav,ADD_MOVIE_TO_THE_LIST}=movieSlice.actions;

export default movieSlice.reducer;