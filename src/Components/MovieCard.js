import { useDispatch } from 'react-redux/es/exports';
import { ADD_FAV, DELETE_FAV } from '../Redux/FavMovie';


const MovieCard = (props) => {
  const { movie, isfavourite } = props;
  const dispatch = useDispatch();
  const favHandler = () => {
    if (isfavourite === false) {
      dispatch(ADD_FAV(movie))
    }
    else {
      dispatch(DELETE_FAV(movie));
    }
  }
  return (
    <div className='movie-card'>
      <div className="left">
        <img src={movie.Poster} alt="movie-poster" />
      </div>
      <div className="right">
        <div className="title">{movie.Title}</div>
        <div className="plot">{movie.Plot}</div>
        <div className="footer">
          <div className="rating">
            {movie.imdbRating}
          </div>
          <button className='favourite-btn' onClick={favHandler} >
            {`${isfavourite ? "Unfavourite" : "Favourite"}`}
          </button>
        </div>
      </div>
    </div>
  )

}

export default MovieCard
