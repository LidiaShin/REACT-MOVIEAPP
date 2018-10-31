import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './movie.css';

function Movie({title,poster}){
return(
<div className="">
<MoviePoster poster={poster} />
<h2>{title}</h2>
</div>
)
}

function MoviePoster({poster}){
return(
<img src={poster} alt="Movie Poster"/>
)
}
    Movie.propTypes={
    title:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.array.isRequired,
    synopsis:PropTypes.string.isRequied
   }

   MoviePoster.PropTypes={
       poster:PropTypes.string.isRequired
   }





export default Movie