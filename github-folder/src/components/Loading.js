import React, { Component } from 'react'

export class Loading extends Component {
  render() {
    return (
        <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
  }
}

export default Loading