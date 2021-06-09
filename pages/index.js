import React, { Component }  from 'react';

import Api from './api/webService';

class App extends Component {
  render() {
      return (      
      <div>               
        <Api />        
      </div>
    );
  }
  
}

export default App;