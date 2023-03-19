import React, { Component } from 'react'
import Square from './Square'
import "./Board.css"

export default class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({ squares: squares });
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} 
      onClick={() => this.handleClick(i)} />
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
