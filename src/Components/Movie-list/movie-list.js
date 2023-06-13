import "./movie-list.css";

import MovieListItem from "../Movie-list-item/movie-list-item";

const MovieList = ({ data }) => {
  
  return (
    <ul className="movie-list">
      {data.map(item => (
        <MovieListItem key={item.id} name={item.name} viewers={item.viewers} favourite={item.favourite} />
      ))}
    </ul>
  );
};

export default MovieList;

//A beautiful mind, Good Will hunting,  Forrest Gamb, Ex machina,
