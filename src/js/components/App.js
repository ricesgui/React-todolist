import React, { Component } from 'react';
import TodoBox from './todobox';

import './../../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <TodoBox />
        </header>
      </div>
    );
  }
}

export default App;
