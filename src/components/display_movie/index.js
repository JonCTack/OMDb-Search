import React from 'react'
import "./index.css"

const DisplayMovie = (props) => {
  let {searchedMovie, movieArray, setMovieArray} = props

const handleClick = () => {
    setMovieArray([...movieArray, searchedMovie.Title])
}
  if (searchedMovie != null){
    let ratingsArray = searchedMovie.Ratings.map((el, i) => {
        return <li key={i}>{el.Source}: {el.Value}</li>
    })
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
            {ratingsArray}
        </div>
      )
  } else {
    return (
        <div>
            Search IMDB
        </div>
    )
  }
 
};

export default DisplayMovie