'use strict';
require('mtwitter');
import React from 'react';

require('styles//TwitterList.scss');

class TwitterListComponent extends React.Component {

  constructor(){
    super();

    this.state = {
      dump: []
    }
  }

  // let amst_id = '727232';
  // let apikey = 'ZGbJVDQgjfUOWLgHCcPHcHTp9';





  loadData(){
    let twitter = new twitter({
      consumer_key: 'ZGbJVDQgjfUOWLgHCcPHcHTp9',
      consumer_secret: 'ggWdwdubAUPWbhqLjLJJQkX6PZhTvwwyTTo9Fl8SP1qwuijyBL',
      access_token_key: '1336271281-4m6VPye5qweGlVEcY2ScWEHiXmoyez54kxNNfhQ',
      access_token_secret: 'haMmNF3am66sd7hFGi40ZfFNUUeoC4T2J5Il4L598RlIS'
    })
    let component = this;
    twitter.get(
  '/1.1/trends/place.json?id=1',
  {key: 'ZGbJVDQgjfUOWLgHCcPHcHTp9'},
function(response){
  component.setState({
    dump: response.data
  });
});

//     twit.search('nodejs OR #node', {}, function(err, data) {
//   console.log(data);
// });
//     $.getJSON('http://www.myapifilms.com/imdb/trailers?token=db30f2b3-b033-4b77-97a1-3cd0988c10f0&format=json&trailers=2&page=10',
//
//     function(response){
//
//       component.setState({
//         dump: response.data.trailers[0].trailers
//
//       });
//
//     });


  }
  render() {
    return (
      <div className="twitterlist-component">
        Please edit src/components///TwitterListComponent.js to update this component!
      </div>
    );
  }
}

TwitterListComponent.displayName = 'TwitterListComponent';

// Uncomment properties you need
// TwitterListComponent.propTypes = {};
// TwitterListComponent.defaultProps = {};

export default TwitterListComponent;
