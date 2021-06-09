import React from 'react';
import 'isomorphic-fetch';

const Api = ({repositories}) => (
  <div>
    <h1>Tests</h1>
    {repositories.map(repo => <h2 key={repo.id}>
      {repo.name}
    </h2>
    )}    
  </div>
);

Api.getInitialProps = async () => {
  const response = await fetch('https://api.github.com/orgs/rocketseat/repos');
  const repositories = await response.json();  
  
  return {
    repositories
  };
};

export default Api;