import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './index.css'

const Search = () => {

    const [searchString, setSearchString] = useState('')
    const [searchedMovie, setSearchedMovie] = useState(null)

    const handleChange = (e) => {
        setSearchString(e.target.value)
    }

    const handleSubmit = async (e) => {

        e.preventDefault()
        let serverData = await axios({
            method: 'GET',
            url: `http://localhost:5000/get_movie/${searchString}`,
            headers: {
                'Content-Type': null
              }
        });
        setSearchedMovie(serverData.data)
    };

  return (
    <section id='search-section'>
        <form onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor="movie-search"></label>
            <input 
            type="search" 
            name="movie-search" 
            value={searchString}
            placeholder="search movie titles" 
            onChange={(event) => handleChange(event)}
            />
        </form>
    </section>
  )
}

export default Search