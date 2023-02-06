
import './App.css';
import DisplayMovie from './components/display_movie';
import Search from './components/search';
import { useState } from 'react';

function App() {
  const [searchedMovie, setSearchedMovie] = useState(null);

  
  return (
    <div className="App">
      <Search setSearchedMovie={setSearchedMovie}/>
      <DisplayMovie searchedMovie={searchedMovie}/>
    </div>
  );
}

export default App;
