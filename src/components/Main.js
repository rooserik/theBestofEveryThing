require('normalize.css');
require('styles/App.scss');
import React from 'react';
import MoviesListComponent from './MoviesListComponent';
import HeaderComponent from './HeaderComponent';




//let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {



  render(){
    return (
      <div className='index'>
          <HeaderComponent />
          <MoviesListComponent />
      </div>
    );
  }
}
//db30f2b3-b033-4b77-97a1-3cd0988c10f0


export default AppComponent;
