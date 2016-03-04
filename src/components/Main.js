require('normalize.css');
require('styles/App.scss');
import React from 'react';
import TheBestTrailers from './TheBestTrailers';
import Header from './Header';




//let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {



  render(){
    return (
      <div className='index'>
          <Header />
          <TheBestTrailers />
      </div>
    );
  }
}
//db30f2b3-b033-4b77-97a1-3cd0988c10f0


export default AppComponent;
