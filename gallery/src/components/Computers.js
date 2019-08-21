import React, {Component} from 'react';
import axios from 'axios';
import Image from './Image';
import apiKey from '../config';


class Computers extends Component {

  state = {
    computers: []
  }

  componentWillMount(){
    this.performSearch();
  }

  performSearch = () => {axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=24&query=computers&client_id=${apiKey}`)
      .then(response => {
        this.setState({
          computers: response.data.results
        })
      });
  }




render(){
  let imgs;
  console.log(this.state.computers);
  const data = this.state.computers
  if (data.length > 0){
    imgs = data.map(img => <Image url={img.urls.small} key={img.id} />);
  }

      console.log(imgs)
  return (
    <div className="photo-container">
      <h2>Computers</h2>
      <ul>
        {imgs}
      </ul>
    </div>
  )
}
}

export default Computers;
