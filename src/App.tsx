import * as React from 'react';

import Form from './components/Form';
import GitHubFork from './components/GitHubFork';
import Intro from './components/Intro';

import './app.css';

const App: React.SFC<{}> = () => (
  <React.StrictMode>
    <GitHubFork />
    <div className="container mt-3">
      <header>
        <h1>Opening Hours Shortcode Builder </h1>
      </header>

      <Intro />

      <main>
        <Form />
      </main>
    </div>
  </React.StrictMode>
);

export default App;
