import "./app.css";

import AppInfo from "../App-info/app-info";
import SearchPanel from "../Search-panel/search-panel";
import AppFilter from "../App-filter/app-filter";
import MovieList from "../Movie-list/movie-list";
import MoviesAddForm from "../Movies-add-form/movies-add-form";
import { useState } from "react";


const App = () => {
  const [data, setData] =useState([
    {name: 'Empire of Osman', viewers: 987, favourite: false, like: false, id:'1'},
    {name: 'A Beautiful Mind', viewers: 999, favourite: false, like: false, id:'2'},
    {name: 'Forrest Gumb', viewers: 869, favourite: false, like: false, id:'3'},
    {name: 'Good Will Hunting', viewers: 978, favourite: true, like: false, id:'4'},
    {name: 'Ex Machina', viewers: 6757, favourite: true, like: false, id:'5'},
  ])

  const addNewMovies = (item)=>{
    const newUser = {
      name: item.name,
      viewers: item.viewers,
      favourite: false,
      like: false,
      id: `${Math.random()*10+1}-${Math.random()*10+1}-${Math.random()*10+1}`
    }
    setData([...data, newUser])
  }

  const deleteMovie = (id)=>{
    const sortMovies = data.filter(movie=> movie.id!=id)
    setData(sortMovies)
  }

  const setFavouriteMovie =(id)=>{
    const movies = data.map(movie=> movie.id===id? ({...movie, favourite: !movie.favourite}): movie)
    setData(movies)
  }


  const setLikeMovie =(id)=>{
    const movies = data.map(movie=> movie.id===id? ({...movie, like: !movie.like}): movie)
    setData(movies)
  }
  return (
    <div className="App font-monospace">
      <div className="content">
        <AppInfo/>
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
       <MovieList 
       data={data} 
       deleteMovie={deleteMovie} 
       setFavouriteMovie={setFavouriteMovie} 
       setLikeMovie={setLikeMovie}/>
       <MoviesAddForm addNewMovies={addNewMovies}/>
      </div>
    </div>
  );
};

export default App;
