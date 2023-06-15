import "./movie-list.css";

import MovieListItem from "../Movie-list-item/movie-list-item";

const MovieList = ({ data, deleteMovie, setFavouriteMovie, setLikeMovie}) => {
  
  return (
    <ul className="movie-list">
      {data.map(item => (
      
        <MovieListItem 
        key={item.id}
        movie={item}
        setLikeMovie={setLikeMovie}
        deleteMovie={deleteMovie}
        setFavouriteMovie={setFavouriteMovie}
        />
      ))}
    </ul>
  );
};

export default MovieList;

//A beautiful mind, Good Will hunting,  Forrest Gamb, Ex machina,
