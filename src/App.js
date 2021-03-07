import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import GameTimer from './components/GameTimer/GameTimer';
import NewGameButton from './components/NewGameButton/NewGameButton';

const colors = ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD'];

export default class App extends Component {
  constructor() {
    super();
    //super must be called before accessing this
    this.state = {
      selectedColorIndex: 0,
      guesses: [this.getNewGuess(), this.getNewGuess()],
      code: this.generateCode(),
    }
  }

  getNewGuess = () => {
    return {
      // code: [null, null, null, null],
      code: [3, 2, 1, 0],
      score: {
        perfect: 0,
        almost: 0,
      }
    }
  }

  generateCode = () => {
    return new Array(4).fill().map(dummy => Math.floor(Math.random() * 4));
  }

  getWinTries = () => {
    //if there's a winner, return num guesses
    //if there's no winner, return 0
    let lastGuess = this.state.guesses.length - 1;
    return this.state.guesses[lastGuess].score.perfect === 4 ? lastGuess + 1 : 0;
  }

  render() {
    let winTries = this.getWinTries();
    return (
      <div className="App">
        <header className="App-header">React Mastermind</header>

        <div className="flex-h">
          <GameBoard 
            colors={colors}
            guesses={this.state.guesses}
          />
          <div>
            <ColorPicker 
              colors={colors}
              selectedColorIndex={this.state.selectedColorIndex}
            />
            <GameTimer />
            <NewGameButton />
          </div>
        </div>
        <footer>{(winTries ? `You won in ${winTries} guesses!` : 'Good Luck!')}</footer>
      </div>
    )
  }
}
