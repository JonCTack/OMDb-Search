import React from 'react'
import Ratings from '../ratings';
import "./index.css"

const DisplayMovie = (props) => {
  let {searchedMovie, movieArray, setMovieArray} = props

const handleClick = () => {
  if(movieArray.flat().includes(searchedMovie.imdbID) === false){
    
    setMovieArray([...movieArray, [searchedMovie.Poster, searchedMovie.Title, searchedMovie.imdbID]])
  }}
  if (searchedMovie != null && !searchedMovie.Error){
    return (
        <div id='movie'>
            <h1>{searchedMovie.Title}</h1>
            <h6>{searchedMovie.Released}; Rated {searchedMovie.Rated}</h6>
            <img src={searchedMovie.Poster} alt="movie poster" onClick={() => handleClick()}></img>
            <h6>{searchedMovie.Genre}; Runtime: {searchedMovie.Runtime}</h6>
            <p>{searchedMovie.Plot}</p>
            <li>Director: {searchedMovie.Director} </li>
            <li>Actors: {searchedMovie.Actors} </li>
            <li>Writers: {searchedMovie.Writer}</li>
            <p>Awards: {searchedMovie.Awards}</p>
            <Ratings searchedMovie={searchedMovie}/>
        </div>
      )
 }else {
    return (
      <div>
          <h3>Search IMDB</h3>
          <h6>click the posters to add to favorites to quickly reference the movie</h6>
      </div>
  )
  }
 
};

export default DisplayMovie