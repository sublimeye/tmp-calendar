import React from 'react'
import { Link, RouteComponentProps } from '@reach/router'

class Home extends React.PureComponent<RouteComponentProps> {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Take Me Home Assignment</h1>
        <h2 style={{ textAlign: 'center' }}>
          <Link to={`/calendar`} style={{ fontSize: '2rem' }}>
            Calendar
          </Link>
        </h2>
      </div>
    )
  }
}

export default Home
