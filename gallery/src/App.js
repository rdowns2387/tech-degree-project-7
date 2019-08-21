import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Search from './components/Search';
import Home from './components/Home';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Computers from './components/Computers';
import Nav from './components/Nav';
import ImageGallery from './components/ImageGallery';
import FourOhFour from './components/FourOhFour';

import axios from 'axios';


import './index.css';
import apiKey from './config';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      images: [],
      loading: true,
      search: ' '
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query ) => {
    axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=24&query=${query}&client_id=${apiKey}`)
      .then(response => {
        this.setState({
          images: response.data.results,
          loading: false,
          search: query
        })
      })
      .catch(error => {
        console.log('Error error', error);
      });
  }




  render() {
    return(
    <BrowserRouter>
    <div className="App">
      <div className="container">
        <h2>Image Search App</h2>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/cats" component={Cats}/>
          <Route path="/dogs" component={Dogs}/>
          <Route path="/computers" component={Computers}/>
          <Route path="/search" render={props =>
            <div>
              <Search onSearch={this.performSearch}/>
              {(this.state.loading)? <p>I'm working on it...</p>:<ImageGallery title={this.state.search} data={this.state.images}{...props} /> }
            </div>
            }
          />
          <Route component={FourOhFour}/>
        </Switch>
      </div>
    </div>
    </BrowserRouter>
  )
  }
};
