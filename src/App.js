// import {data} from "./data"
import Navbar from "../src/Components/Navbar";
import MovieCard from "./Components/MovieCard";
import { useSelector } from "react-redux";
import {data} from "../src/data"
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import {ADD_MOVIES} from "./Redux/FavMovie"

function App() {
  const dispatch=useDispatch();
  
  useEffect(()=>{
    dispatch(ADD_MOVIES(data));
  },[])

  const movies=useSelector((state)=>state.favMovie.movies)

  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">
            Movies
          </div>
          <div className="tab">
            Favourite
          </div>
        </div>
        <div className="list">
          {movies.map((movie,index)=>{
            return <MovieCard movie={movie} key={`movies-${index}`}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
