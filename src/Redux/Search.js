import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

const searchResult=createAsyncThunk(
    "search/searchResult",
    async (searchAPI)=>{
        let response=await fetch(searchAPI);
        response=response.json();
        return response;
    }
)

export const searchSlice=createSlice({
    name:"search",
    initialState:{
        showSearchResult:false,
        result:{},
        status:null,
        error:''
    },
    reducers:{
        ChangeshowSearchResult:(state,action)=>{
            state.showSearchResult=action.payload
        }
    },
    extraReducers:{
        [searchResult.pending]:(state,action)=>{
            state.status="loading"
        },
        [searchResult.fulfilled]:(state,action)=>{
            if(action.payload.Response==="False")
            {
                state.showSearchResult=false;
            }
            else
            {
                state.showSearchResult=true;
            }
            state.result=action.payload;
            state.status="success" ;
        },
        [searchResult.rejected]:(state,action)=>{
            state.showSearchResult=false;
            state.error=action.payload;
            state.status="failed";
        }
    }
    
})


export const  {ChangeshowSearchResult}=searchSlice.actions;

export default searchSlice.reducer;
export {searchResult};