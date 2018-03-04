import './App.css';

import * as React from 'react';

class App extends React.Component {
  // Example fetch to the server.
  // fetchData = async () => {
  //   const response = await fetch(`/api`, { method: 'GET' });
  //   const json = await response.json();
  //   console.log(json);
  // }

  render() {
    return <div id='App'>
      <span>Hello, world</span>
    </div>;
  }
}

export default App;
