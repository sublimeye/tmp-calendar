import React from 'react'
import { Redirect, Router } from '@reach/router'

import Home from 'src/screens/Home'
import NotFound from 'src/screens/NotFound'
import TitlesCalendarScreen from 'src/screens/TitlesCalendarScreen'

class App extends React.Component {
  render() {
    const today = new Date()
    return (
      <Router>
        <Home path={'/'} />
        <TitlesCalendarScreen path={`calendar/:year/:month`} />

        <Redirect
          from={`calendar/*`}
          to={`/calendar/${today.getFullYear()}/${today.getMonth() + 1}`}
          noThrow
        />
        <Redirect from={`*`} to={`/`} noThrow />
        <NotFound default />
      </Router>
    )
  }
}

export default App
