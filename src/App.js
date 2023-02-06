
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
      <Search setSearchedMovie={setSearchedMovie}/>
      <DisplayMovie searchedMovie={searchedMovie} movieArray={movieArray} setMovieArray={setMovieArray}/>
      <FavoriteMovies movieArray={movieArray}/>
    </div>
  );
}

export default App;
