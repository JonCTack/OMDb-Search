import React from 'react'

const Ratings = (props) => {
    let {searchedMovie} = props
    let ratingsArray = searchedMovie.Ratings.map((el, i) => {
        return <li key={i}>{el.Source}: {el.Value}</li>
    })
  return (
    <div>{ratingsArray}</div>
  )
}

export default Ratings