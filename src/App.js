// import {data} from "./data"
import Navbar from "../src/Components/Navbar";
import MovieCard from "./Components/MovieCard";
import { useSelector } from "react-redux";
import {data} from "../src/data"
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import {ADD_MOVIES,changeShowFav} from "./Redux/FavMovie"


function App() {



  const dispatch=useDispatch();
  
  useEffect(()=>{
    dispatch(ADD_MOVIES(data));
  },[])

  const movies=useSelector((state)=>state.favMovie.moviesList)
  const favourites=useSelector((state)=>state.favMovie.fav);
  const toShowFav=useSelector((state)=>state.favMovie.showFav);
  const isFav = (movie) => {
    const index=favourites.indexOf(movie);
    if(index===-1)
    {
      return false;
    }
    else
    {
      return true;
    }
  } 

  const displayMovies=(toShowFav)?favourites:movies;
  
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className={`tab ${toShowFav?'':'active-tabs'}`}onClick={()=>{
            dispatch(changeShowFav(false))
          }}>
            Movies
          </div>
          <div className={`tab ${toShowFav?'active-tabs':''}`} onClick={()=>{
            dispatch(changeShowFav(true))
          }}>
            Favourite
          </div>
        </div>
        <div className="list">
          {
            displayMovies.map((movie,index)=>{
              return <MovieCard movie={movie} isfavourite={isFav(movie)} key={`movies-${index}`} /> 
            })
          }
          {
            (displayMovies.length===0)&&<div className="no-movies">No movie to display!</div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
