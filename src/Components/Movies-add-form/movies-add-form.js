import './movies-add-form.css'

const MoviesAddForm = () => {
  return (
    <div className="movies-add-form">
        <h3>Add new movies</h3>
        <form className='add-form d-flex'>
           <input type="text" className='form-control new-post-label' placeholder='Which movie?' />
           <input type="number" className='form-control new-post-label' placeholder='How many times seen?'/>
           <button type='submit' className='btn btn-outline-dark'>
            Add
            </button> 
        </form>
    </div>
  )
}

export default MoviesAddForm