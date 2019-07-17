import React from 'react'
import { Link, RouteComponentProps } from '@reach/router'

class NotFound extends React.PureComponent<RouteComponentProps> {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>I wonder how did you get here?</h1>
        <Link to={`/`}>Take me home!</Link>
      </div>
    )
  }
}

export default NotFound
