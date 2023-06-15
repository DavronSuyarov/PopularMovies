import { useState } from 'react'
import './movies-add-form.css'

const MoviesAddForm = ({addNewMovies}) => {
  const [values, setValues] = useState({
    name: '',
    viewers: '',
  })


const handleChange=(e)=>{
  const {name, value} = e.target

  setValues({
    ...values,
    [name]: value
  })
}

  const submit=(e)=>{
    e.preventDefault()
    console.log("values: ", values)
    addNewMovies(values)
      setValues({
        name: '',
        viewers: ''
      })
  }


  return (
    <div className="movies-add-form">
        <h3>Add new movies</h3>
        <form
        onSubmit={submit}
        className='add-form d-flex'>
           <input
            onChange={handleChange}
            value={values.name}
            required
            name='name'
           type="text" className='form-control new-post-label' placeholder='Which movie?' />
           <input
            onChange={handleChange}
            value={values.viewers}
            required
            name='viewers'
           type="number" className='form-control new-post-label' placeholder='How many times seen?'/>
           <button
           type='submit' className='btn btn-outline-dark'>
            Add
            </button> 
        </form>
    </div>
  )
}

export default MoviesAddForm