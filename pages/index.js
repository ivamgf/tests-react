import React, { Component }  from 'react';
import 'isomorphic-fetch';
import Home from './home';

const App = ({repositories}) => (
  <div>
    <Home />
    {repositories.map(repo => <h2 key={repo.id}>
      {repo.name}
    </h2>
    )}    
  </div>
);

App.getInitialProps = async () => {
  const response = await fetch('https://api.github.com/orgs/rocketseat/repos');
  const repositories = await response.json();  
  
  return {
    repositories
  };
};

export default App;