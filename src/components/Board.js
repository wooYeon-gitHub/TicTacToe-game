import React, { Component } from 'react'
import Square from './Square'
import "./Board.css"

export default class Board extends Component {

  renderSqiare(i) {
    return <Square value={i} />
  }


  render() {
    return (
      <div>
        <div className='status'>Next Player: X, 0</div>
        <div className='board-row'>
          {this.renderSqiare(0)}
          {this.renderSqiare(1)}
          {this.renderSqiare(2)}
        </div>
        <div className='board-row'>
          {this.renderSqiare(3)}
          {this.renderSqiare(4)}
          {this.renderSqiare(5)}
        </div>
        <div className='board-row'>
          {this.renderSqiare(6)}
          {this.renderSqiare(7)}
          {this.renderSqiare(8)}
        </div>
      </div>
    )
  }
}
