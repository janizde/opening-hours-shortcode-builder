import * as React from 'react';

const GitHubFork: React.SFC<any> = () => (
  <a href="https://github.com/janizde/opening-hours-shortcode-builder">
    <img
      className={'github-fork'}
      src={'http://aral.github.io/fork-me-on-github-retina-ribbons/right-graphite@2x.png'}
      alt={'Fork me on GitHub'}
    />
  </a>
);

export default GitHubFork;
