import React from 'react'
import Calendar from 'src/components/Calendar'

class App extends React.Component {
  // Example fetch to the server.
  // fetchData = async () => {
  //   const response = await fetch(`/api`, { method: 'GET' });
  //   const json = await response.json();
  //   console.log(json);
  // }

  render() {
    return (
      <div id="App">
        <div style={{width: '800px', margin: '0 auto'}}>
          <Calendar />
        </div>
      </div>
    )
  }
}

export default App
