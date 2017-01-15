import React, {Component} from 'react';
import {Link, Match} from 'react-router';
import BoardsContainer from './pages/BoardsContainer';

class App extends Component {
  render() {
    return (
      <div>
          <Match exactly pattern="/" component={BoardsContainer} />
      </div>
    )
  }
}

export default App;
