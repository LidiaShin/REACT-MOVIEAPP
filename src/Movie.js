import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './movie.css';

class Movie extends Component{


   static propTypes={

    title:PropTypes.string.isRequired,
    poster:PropTypes.string
   }











    render(){
        console.log(this.props);
        return(

        <div>      
           <MoviePoster poster={this.props.poster} /> 
           <h1>{this.props.title}</h1>
        </div>
        )

       
    }
}

class MoviePoster extends Component{
  render(){
      return(
          // eslint-disable-next-line
          <img src={this.props.poster} />
      )
  }
}



export default Movie