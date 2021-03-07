import React, { Component } from 'react';
import './App.css';
import GamePage from '../GamePage/GamePage';
import SettingsPage from '../SettingsPage/SettingsPage';

import { Route, Switch } from 'react-router-dom';

const colors = {
  Easy: ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD'],
  Moderate: ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD', '#B7D968'],
  Difficult: ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD', '#B7D968', '#555E7B'],
};

export default class App extends Component {
  constructor() {
    super();
    //super must be called before accessing this
    this.state = {...this.getInitialState(), difficulty: 'Easy'};
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
    let numberOfColors = this.state && colors[this.state.difficulty].length;
    numberOfColors = numberOfColors || 4;
    return new Array(4).fill().map(dummy => Math.floor(Math.random() * numberOfColors));
  }

  getWinTries = () => {
    //if there's a winner, return num guesses
    //if there's no winner, return 0
    let lastGuess = this.state.guesses.length - 1;
    return this.state.guesses[lastGuess].score.perfect === 4 ? lastGuess + 1 : 0;
  }

  handleDifficultyChange = (level) => {
    //use callback to ensure level is updated BEFORE calling handleNewGameClick
    this.setState({ difficulty: level }, () => this.handleNewGameClick());
  }

  handleColorSelection = (colorIndex) => {
    this.setState({ selectedColorIndex: colorIndex });
  }

  handleNewGameClick = () => {
    this.setState(this.getInitialState());
  }

  handlePegClick = (pegIndex) => {
    //get index of last guess object
    let currentGuessIndex = this.state.guesses.length - 1; 
    
    //Replace objects/arrays with new ones
    let guessesCopy = [...this.state.guesses];
    let guessCopy = {...guessCopy[currentGuessIndex]};
    let codeCopy = [...guessCopy.code];

    //update new code array with the currently selected color
    codeCopy[pegIndex] = this.state.selectedColorIndex; 

    //update the new guess object
    guessCopy.code = codeCopy; 

    //update new guesses array
    guessesCopy[currentGuessIndex] = guessCopy; 

    //update state with new guesses array
    this.setState({ guesses: guessesCopy });
  }

  handleScoreClick = () => {
    //need index of current guess object(last object in guesses array)
    let currentGuessIndex = this.state.guesses.length - 1;

    //create "working" copies of "guessed" code and the secret code
    //can modify them as we compute the # of perfect & almost without messing up actual ones in state
    let guessCodeCopy = [...this.state.guesses[currentGuessIndex].code];
    let secretCodeCopy = [...this.state.code];

    let perfect = 0, almost = 0;

    //1. Pass computes # of "perfect"
    guessCodeCopy.forEach((code, index) => {
      if (secretCodeCopy[index] === code) {
        perfect++;
        //Ensure same choice is not matched again by updating both elements in the "working" arrays to null
        guessCodeCopy[index] = secretCodeCopy[index] = null;
      }
    });

    //2. Pass computes # of "amlmost"
    guessCodeCopy.forEach((code, index) => {
      if (code === null) return;
      let foundIndex = secretCodeCopy.indexOf(code);
      if (foundIndex > -1) {
        almost++;
        //Ensure same choice is not matched again
        secretCodeCopy[foundIndex] = null;
      }
    });

    //state must only be updated with new objects/array
    //always replace objects/arrays with new ones
    let guessesCopy = [...this.state.guesses];
    let guessCopy = {...guessesCopy[currentGuessIndex]};
    let scoreCopy = {...guessCopy.score};

    //set scores
    scoreCopy.perfect = perfect;
    scoreCopy.almost = almost;

    //update new guess with the new score object
    guessCopy.score = scoreCopy;

    //update new guesses with the new guess object
    guessesCopy[currentGuessIndex] = guessCopy;

    //Add a new guess if there's no winner
    if (perfect !== 4) guessCopy.push(this.getNewGuess());

    //Update state with new guesses array
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
              colors={colors[this.state.difficulty]}
              selectedColorIndex={this.state.selectedColorIndex}
              guesses={this.state.guesses}
              handleColorSelection={this.handleColorSelection}
              handleNewGameClick={this.handleNewGameClick}
              handlePegClick={this.handlePegClick}
              handleScoreClick={this.handleScoreClick}
            />
          )} />

          <Route exact path='/settings' render={props => (
            <SettingsPage 
              {...props} 
              colorsLookup={colors}
              difficulty={this.state.difficulty}
              handleDifficultyChange={this.handleDifficultyChange}
            />
          )} />

        </Switch>
      </div>
    )
  }
}
