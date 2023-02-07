
import './App.css';
import DisplayMovie from './components/display_movie';
import Search from './components/search';
import { useState } from 'react';
import FavoriteMovies from './components/favorite_movies';

function App() {
  const [searchedMovie, setSearchedMovie] = useState(null);
  const [movieArray, setMovieArray] = useState([])
  
  return (
    <div className="App">
      <div id="searchMovieDiv">
      <Search setSearchedMovie={setSearchedMovie}/>
      </div>
      <div id="displayMovieDiv">
      <FavoriteMovies movieArray={movieArray} setSearchedMovie={setSearchedMovie}/>
      <DisplayMovie searchedMovie={searchedMovie} movieArray={movieArray} setMovieArray={setMovieArray}/>
      </div>
    </div>
  );
}

export default App;
