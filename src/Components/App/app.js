import "./app.css";

import AppInfo from "../App-info/app-info";
import SearchPanel from "../Search-panel/search-panel";
import AppFilter from "../App-filter/app-filter";
import MovieList from "../Movie-list/movie-list";
import MoviesAddForm from "../Movies-add-form/movies-add-form";


const App = () => {

  const data = [
    {name: 'Empire of Osman', viewers: 987, favourite: false, id:'1'},
    {name: 'A Beautiful Mind', viewers: 999, favourite: false, id:'2'},
    {name: 'Forrest Gumb', viewers: 869, favourite: false, id:'3'},
    {name: 'Good Will Hunting', viewers: 978, favourite: false, id:'4'},
    {name: 'Ex Machina', viewers: 6757, favourite: true, id:'5'},
  ]
  return (
    <div className="App font-monospace">
      <div className="content">
        <AppInfo/>
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
          
        </div>
       <MovieList data={data}/>
       <MoviesAddForm/>
      </div>
    </div>
  );
};

export default App;
