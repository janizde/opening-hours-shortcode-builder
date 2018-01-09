import React, { Component } from 'react';

import Form from './components/Form';

import './app.css';

class App extends Component {
  render() {
    return (
      <div className="container mt-3">
        <header>
          <h1>Opening Hours Shortcode Builder</h1>
        </header>
        <main>
          <Form />
        </main>
      </div>
    );
  }
}

export default App;
