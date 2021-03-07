import React, { Component } from 'react';
import './App.css';
import GamePage from '../GamePage/GamePage';
import SettingsPage from '../SettingsPage/SettingsPage';

import { Route, Switch } from 'react-router-dom';

const colors = ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD'];

export default class App extends Component {
  constructor() {
    super();
    //super must be called before accessing this
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    return {
      selectedColorIndex: 0,
      guesses: [this.getNewGuess()],
      code: this.generateCode(),
    }
  }

  getNewGuess = () => {
    return {
      code: [null, null, null, null],
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

  handleColorSelection = (colorIndex) => {
    this.setState({ selectedColorIndex: colorIndex });
  }

  handleNewGameClick = () => {
    this.setState(this.getInitialState());
  }

  handlePegClick = (pegIndex) => {
    let currentGuessIndex = this.state.guesses.length - 1; //get index of last guess object
    
    //Replace objects/arrays with new ones
    let guessesCopy = [...this.state.guesses];
    let guessCopy = {...guessCopy[currentGuessIndex]};
    let codeCopy = [...guessCopy.code];

    codeCopy[pegIndex] = this.state.selectedColorIndex; 
    //update new code array with the currently selected color

    guessCopy.code = codeCopy; //update the new guess object

    guessesCopy[currentGuessIndex] = guessCopy; //update new guesses array

    this.setState({ guesses: guessesCopy });
  }

  handleScoreClick = () => {
    //need index of current guess object(last object in guesses array)
    let currentGuessIndex = this.state.guesses.length - 1;

    let guessCodeCopy = [...this.state.guesses[currentGuessIndex].code];
    let secretCodeCopy = [...this.state.code];

    let perfect = 0, almost = 0;

    guessCodeCopy.forEach((code, index) => {
      if (secretCodeCopy[index] === code) {
        perfect++;
        guessCodeCopy[index] = secretCodeCopy[index] = null;
      }
    });

    guessCodeCopy.forEach((code, index) => {
      if (code === null) return;
      let foundIndex = secretCodeCopy.indexOf(code);
      if (foundIndex > -1) {
        almost++;
        secretCodeCopy[foundIndex] = null;
      }
    });

    let guessesCopy = [...this.state.guesses];
    let guessCopy = {...guessesCopy[currentGuessIndex]};
    let scoreCopy = {...guessCopy.score};

    scoreCopy.perfect = perfect;
    scoreCopy.almost = almost;

    guessCopy.score = scoreCopy;

    guessesCopy[currentGuessIndex] = guessCopy;

    if (perfect !== 4) guessCopy.push(this.getNewGuess());

    this.setState({ guesses: guessesCopy });
  }

  render() {
    let winTries = this.getWinTries();

    return (
      <div className='App'>
        <header className='App-header-footer'>React Mastermind</header>

        <Switch>
          <Route exact path='/' render={() => (
            <GamePage 
              winTries={winTries}
              colors={colors}
              selectedColorIndex={this.state.selectedColorIndex}
              guesses={this.state.guesses}
              handleColorSelection={this.handleColorSelection}
            />
          )} />

          <Route exact path='/settings' render={props => (
            <SettingsPage {...props} />
          )} />

        </Switch>
      </div>
    )
  }
}
