import React from 'react'

export default class NotFound extends React.Component {
  static async getInitialProps(ctx) {
    ctx.res.status(404)
  }

  render() {
    return (
      <div>
        <h1>404 Not Found</h1>
        <p>Page not found</p>
      </div>
    )
  }
}
