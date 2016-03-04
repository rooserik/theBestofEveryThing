'use strict';

import React from 'react';
import $ from 'jquery';


require('styles/MoviesList.scss');

class MoviesListComponent extends React.Component {
  constructor(){
    super();

    this.state = {
      dump: []
    }
  }

  loadData(){

    let component = this;
    $.getJSON('http://www.myapifilms.com/imdb/search?yearStart=2016&token=db30f2b3-b033-4b77-97a1-3cd0988c10f0&format=json&filter=num_votes&order=desc&titleType=feature&genres=',

    function(response){

      component.setState({
        dump: response.data.movies

      });

    });


  }



  componentDidMount(){
    this.loadData();

  }


  render() {
    return (
      <div className='index'>

        <h1> List of the best movies</h1>
        {this.state.dump.map(function(movie){
          //   let starStyle = {
          //   width: `${movie.rating * 10.0}%`
          // };
          return(


            <div key={movie.idIMDB}>
              <span>
                {movie.ranking}
              </span>
              <span>
                <img src={movie.urlPoster} />
              </span>
              <span>
                <h2>
                  {movie.title}
                </h2>
              </span>
              <h3>
                {movie.rating}
              </h3>
              {/*<div className="star"><span style={starStyle} className="rating"></span></div>*/}
            </div>


          );
        })}


      </div>
    );
  }
}
//db30f2b3-b033-4b77-97a1-3cd0988c10f0


MoviesListComponent.displayName = 'MoviesListComponent';

// Uncomment properties you need
// MoviesListComponent.propTypes = {};
// MoviesListComponent.defaultProps = {};

export default MoviesListComponent;
