import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
// import { data } from "../data";
import { searchResult, ChangeshowSearchResult } from "../Redux/Search"
import { useState } from 'react';
import {ADD_MOVIE_TO_THE_LIST} from "../Redux/FavMovie";



function Navbar() {
  const dispatch = useDispatch();
  
  const [searchInput,setSearchInput]=useState("");
  
  const onchange=(event)=>{
    setSearchInput(event.target.value);
  }

  const handleSearchClick = () => {
    (searchInput.length>0)&&dispatch(searchResult(`https://www.omdbapi.com/?t=${searchInput}&apikey=72bcbe0c`));

  }
  const searchResultdata = useSelector((state) => state.search.result);
  const showSearchResult=useSelector((state)=>state.search.showSearchResult);

  return (
    <div className='nav'>
      <div className="search-container">
        <input type="text" onChange={onchange} value={searchInput} />
        <button id='search-btn' onClick={handleSearchClick}>Search</button>


        {
          showSearchResult&&
          <div className='search-results'>
            <div className='search-result'>
              <img src={searchResultdata.Poster} alt="search-pic" />
              <div className="movie-info">
                <span>
                  {searchResultdata.Title}
                </span>
                <button onClick={()=>{
                  dispatch(ChangeshowSearchResult(false));
                  dispatch(ADD_MOVIE_TO_THE_LIST(searchResultdata));
                }} >
                  Add To Movies
                </button>
              </div>
            </div>
          </div>
        }

      </div>

    </div>
  )
}

export default Navbar

