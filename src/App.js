import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import $ from 'jquery';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Header from './Components/Header';
import About from './Components/About';
import Home from './Components/Home';
import Posts from './Components/Posts';
import PostItem from './Components/PostItem';
import Projects from './Components/Projects';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  // happens immediately before the first render
  componentWillMount() {
    $.ajax({
      url:'/data.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({data: data})
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }


  render() {

    const post_data = (this.state.data.hasOwnProperty("posts") ? this.state.data["posts"] : []) 
    // console.log("post_data: ", post_data);

    return (
      <BrowserRouter>
          <Header />

        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route exact path="/posts" component={() => 
                <Posts data={post_data} />} />
            // <Route path="/posts/:id" component={PostItem} />

        </Switch>
      </BrowserRouter>
    )
  }

}

export default App;
