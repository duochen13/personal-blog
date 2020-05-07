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
import Projects from './Components/Projects';

class App extends Component {

  constructor(props) {
    super(props);
    this.state=  {
      data: {}
    };
  }

  getData() {
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

  componentDidMount() {
    this.getData();
  }

  render() {
    console.log("data.json: ", this.state.data["posts"]);
    return (
      <BrowserRouter>
          <Header />

        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/posts" component={() => 
                <Posts data={this.state.data["posts"]} />}/>

        </Switch>
      </BrowserRouter>
    )
  }

}

export default App;
