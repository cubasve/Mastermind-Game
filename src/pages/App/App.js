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
