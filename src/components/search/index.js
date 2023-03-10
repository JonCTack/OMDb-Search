import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './index.css';

const Search = (props) => {
    let {setSearchedMovie} = props
    const [searchString, setSearchString] = useState('');
    let isFirstRender = useRef(true)
    let searchError = useRef(false)
    useEffect(()=>{
        if(isFirstRender.current === true){
        isFirstRender.current = false
    }
    },[])

    const handleChange = (e) => {
        setSearchString(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        makeServerCall(e)
    };

    const makeServerCall = async (e) => {
        let serverData = await axios({
            method: 'GET',
            url: `/get_movie/${searchString}`,
            headers: {
                'Content-Type': null
              }
        });

        setSearchedMovie(serverData.data)
        if (serverData.data.Error){
            searchError.current = true
        } else {
            searchError.current = false
        }}

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
};

export default Search;