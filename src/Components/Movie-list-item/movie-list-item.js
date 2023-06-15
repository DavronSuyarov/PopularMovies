import "./movie-list-item.css";

const MovieListItem =(props)=>{
    const {  deleteMovie, setFavouriteMovie, setLikeMovie} = props;
    const {id, name, viewers, favourite, like, } = props.movie
   
    return (
      <li
        className={`list-group-item d-flex justify-content-beween ${favourite && "favourite"} ${like && "like"}`}
      >
        <span 
        onClick={()=> setLikeMovie(id)}
         className="list-group-item-label">{name}</span>
        <input
          type="number"
          className="list-group-item-input"
          defaultValue={viewers}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
          onClick={()=> setFavouriteMovie(id)}
          type="button" 
          className="btn-cookie btn-sm ">
            <i className="fas fa-cookie"></i>
          </button>
          <button
          onClick={()=>deleteMovie(id)}
          type="button" className="btn-trash btn-sm ">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  
}

// const MovieListItem = ({name, viewers, favourite}) => {

//   return (
//     <li className={`list-group-item d-flex justify-content-beween ${favourite && 'favourite'}`}>
//       <span className="list-group-item-label">{name}</span>
//       <input
//         type="number"
//         className="list-group-item-input"
//         defaultValue={viewers}
//       />
//       <div className="d-flex justify-content-center align-items-center">
//         <button type="button" className="btn-cookie btn-sm ">
//           <i className="fas fa-cookie"></i>
//         </button>
//         <button type="button" className="btn-trash btn-sm ">
//           <i className="fas fa-trash"></i>
//         </button>
//         <i className="fas fa-star"></i>
//       </div>
//     </li>
//   );
// };

export default MovieListItem;
