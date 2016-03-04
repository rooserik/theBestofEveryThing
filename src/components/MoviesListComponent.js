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
    $.getJSON('http://www.myapifilms.com/imdb/trailers?token=db30f2b3-b033-4b77-97a1-3cd0988c10f0&format=json&trailers=2&page=10',

    function(response){

      component.setState({
        dump: response.data.trailers[0].trailers

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
        {this.state.dump.map(function(trailer){
          return(


          <div key={trailer.idIMDB}><p>{trailer.title}</p></div>


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
