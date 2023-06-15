import './app-info.css'

const AppInfo = ({allMoviesCount, favouriteMoviesCount}) => {
  return (
    <div className='app-info'>
      <p className='fs-3 text-uppercase'> ALL MOVIES: {allMoviesCount} </p>
      <p className='fs-5 text-uppercase'>Favourite movies: {favouriteMoviesCount}</p>
      </div>
  )
}

export default AppInfo