import { useState } from "react";
import "./app-filter.css";

const AppFilter = ({
  setAllMovies,
  setPopularMovies,
  setMostWatchedMovies,
}) => {
  const [selected, setSelected] = useState("all");

  return (
    <div className="btn-group">
      <button
        onClick={() => {
          setAllMovies();
          setSelected("all");
        }}
        className={`btn ${
          selected === "all" ? "btn-dark" : "btn-outline-dark"
        }`}
        type="button"
      >
        All movies
      </button>
      <button
        onClick={() => {
          setPopularMovies();
          setSelected("popular");
        }}
        className={`btn ${
          selected === "popular" ? "btn-dark" : "btn-outline-dark"
        }`}
        type="button"
      >
        Popular movies
      </button>
      <button
        onClick={() => {
          setMostWatchedMovies();
          setSelected("most");
        }}
        className={`btn ${
          selected === "most" ? "btn-dark" : "btn-outline-dark"
        }`}
        type="button"
      >
        Most watched movies
      </button>
    </div>
  );
};

export default AppFilter;
