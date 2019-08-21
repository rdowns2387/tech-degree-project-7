import React, {Component} from 'react';
import axios from 'axios';
import Image from './Image';
import apiKey from '../config';


class Cats extends Component {

  state = {
    cats: []
  }

  componentWillMount(){
    this.performSearch();
  }

  performSearch = () => {axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=24&query=cats&client_id=${apiKey}`)
      .then(response => {
        this.setState({
          cats: response.data.results
        })
      });
  }




render(){
  let imgs;
  console.log(this.state.cats);
  const data = this.state.cats
  if (data.length > 0){
    imgs = data.map(img => <Image url={img.urls.small} key={img.id} />);
  }

      console.log(imgs)
  return (
    <div className="photo-container">
      <h2>Cats</h2>
      <ul>
        {imgs}
      </ul>
    </div>
  )
}
}

export default Cats;
