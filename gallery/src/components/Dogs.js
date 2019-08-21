import React, {Component} from 'react';
import axios from 'axios';
import Image from './Image';
import apiKey from '../config';


class Dogs extends Component {

  state = {
    dogs: []
  }

  componentWillMount(){
    this.performSearch();
  }

  performSearch = () => {axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=24&query=dogs&client_id=${apiKey}`)
      .then(response => {
        this.setState({
          dogs: response.data.results
        })
      });
  }




render(){
  let imgs;
  console.log(this.state.dogs);
  const data = this.state.dogs
  if (data.length > 0){
    imgs = data.map(img => <Image url={img.urls.small} key={img.id} />);
  }

      console.log(imgs)
  return (
    <div className="photo-container">
      <h2>Dogs</h2>
      <ul>
        {imgs}
      </ul>
    </div>
  )
}
}

export default Dogs;
