import React from 'react'
import './index.css'
import axios from 'axios'

const FavoriteMovies = (props) => {
    let {movieArray, setSearchedMovie} = props
    const handleFavClick = (title) => {
        makeServerCall(title)
    }
    const makeServerCall = async (e) => {
        let serverData = await axios({
            method: 'GET',
            url: `/get_movie/${e}`,
            headers: {
                'Content-Type': null
              }
        });
        setSearchedMovie(serverData.data)
    }

    if(movieArray[0] != null){
        let arrayJSX = movieArray.map((favArray, i) => {
            return( <div key={favArray[2]}>
                <img src={favArray[0]} alt="favorite movie poster" className="fav_movie" onClick={() => handleFavClick(favArray[1])}/>
            </div>)
        })
    return (
    <div id='favorite'>
        <h4>Favorite Movies:</h4>
        <p>click the posters to view</p>
        <section id='fav_array'>
        {arrayJSX}
        </section>
    </div>
    )}
}

export default FavoriteMovies