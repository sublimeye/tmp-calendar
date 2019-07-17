import React from 'react'
import { Link, RouteComponentProps } from '@reach/router'

class Home extends React.PureComponent<RouteComponentProps> {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Take Me Home Assignment</h1>
        <Link to={`/calendar`}>Calendar</Link>
      </div>
    )
  }
}

export default Home
