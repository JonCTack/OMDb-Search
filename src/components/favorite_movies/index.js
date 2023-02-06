import React from 'react'
import './index.css'
const FavoriteMovies = (props) => {
    let {movieArray} = props
    if(movieArray[0] != null){
        let arrayJSX = movieArray.map((title, i) => {
            return <div key={i}>
                {title}
            </div>
        })
    return (
    <div id='favorite'>
        Favorite Movies:
        {arrayJSX}
    </div>
    )}
}

export default FavoriteMovies