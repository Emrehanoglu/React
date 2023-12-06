import React, { Component } from 'react'

export class Loading extends Component {
  render() {
    return (
        <div class="d-flex justify-content-center">
            <div className="spinner-grow text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
  }
}

export default Loading