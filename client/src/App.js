import React, {Component} from 'react';
import {Match} from 'react-router';
import BoardsPage from './pages/BoardsPage';
import ThreadsPage from './pages/ThreadsPage'

class App extends Component {
  render() {
    return (
      <div>
          <Match exactly pattern="/" component={BoardsPage} />
          <Match pattern="/board/:id" component={ThreadsPage} />
      </div>
    )
  }
}

export default App;
