import React from 'react';
import { Link } from 'react-router-dom';
import GameBoard from '../../components/GameBoard/GameBoard';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import GameTimer from '../../components/GameTimer/GameTimer';
import NewGameButton from '../../components/NewGameButton/NewGameButton';
import './GamePage.css'

export default function GamePage({ 
    colors, 
    guesses, 
    handleColorSelection, 
    handleNewGameClick,
    handlePegClick, 
    handleScoreClick, 
    selectedColorIndex, 
    winTries }) {
    return (
        <div className='App'>

            <div className='flex-h align-flex-end'>
                <GameBoard 
                    colors={colors}
                    guesses={guesses}
                    handlePegClick={handlePegClick}
                    handleScoreClick={handleScoreClick}
                />
            </div>

            <div className='App-controls'>
                <ColorPicker 
                    colors={colors}
                    handleColorSelection={handleColorSelection}
                    selectedColorIndex={selectedColorIndex}
                />
                <GameTimer />

                <Link className='btn btn-default GamePage-link' to='/settings'>
                    Difficulty
                </Link>

                <NewGameButton 
                    handleNewGameClick={handleNewGameClick}
                />
            </div>

            <footer className='App-header-footer'>
                {winTries ? `You won in ${winTries} guesses!` : 'Good luck!'}
            </footer>
        </div>
    )
}