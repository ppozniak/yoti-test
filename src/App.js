import React, { Component } from 'react';
import Sidebar from '@features/Sidebar';

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div className="icon-logo">
          <span className="sr-only">Yoti</span>
        </div>
        <span className="icon-verified" />
        <h1>Yoti app</h1>
      </div>
    );
  }
}

export default App;
