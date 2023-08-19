import React, {Component} from 'react';
import './App.css';
import NewComp from './Components/NewComp';

class App extends Component {
  styles = {
    fontStyle: "bold",
    color: "teal"
  }

  render() {
    return (
      <div classname="app">
        <h1 style={this.styles}>Welcome</h1>
        <NewComp />
      </div>
    );
  }
}

export default App;
