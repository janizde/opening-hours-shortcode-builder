import * as React from 'react';

const GitHubFork: React.FC = () => (
  <a href="https://github.com/janizde/opening-hours-shortcode-builder">
    <img
      className={'github-fork'}
      src={
        'https://aral.github.io/fork-me-on-github-retina-ribbons/right-graphite@2x.png'
      }
      alt={'Fork me on GitHub'}
    />
  </a>
);

export default GitHubFork;
