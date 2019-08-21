import React, {Component} from 'react';

class Home extends Component {

render(){
  return (
    <div className="photo-container">
      <h3>Welcome to the Image API App</h3>
      <p>This image app uses the Unsplash photo API to fetch images. There are three pre-defined searches in the navigation menu above, but feel free to search for your own photos using the search tab!</p>
    </div>
  )
}
}

export default Home;
