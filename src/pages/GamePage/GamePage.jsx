import React from 'react';
import { Link } from 'react-router-dom';
import GameBoard from '../../components/GameBoard/GameBoard';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import GameTimer from '../../components/GameTimer/GameTimer';
import NewGameButton from '../../components/NewGameButton/NewGameButton';
import './GamePage.css'

export default function GamePage({ 
    colors, 
    elapsedTime,
    guesses, 
    isTiming,
    handleColorSelection, 
    handleNewGameClick,
    handlePegClick, 
    handleScoreClick, 
    handleTimerUpdate,
    selectedColorIndex, 
    winTries }) {

    return (
        <div className='GamePage'>
            <div className='flex-h align-flex-end'>
                <GameBoard 
                    colors={colors}
                    guesses={guesses}
                    handlePegClick={handlePegClick}
                    handleScoreClick={handleScoreClick}
                />

                <div className='GamePage-controls'>
                    <ColorPicker 
                        colors={colors}
                        handleColorSelection={handleColorSelection}
                        selectedColorIndex={selectedColorIndex}
                    />
                    <GameTimer 
                        elapsedTime={elapsedTime}
                        handleTimerUpdate={handleTimerUpdate}
                        isTiming={isTiming}
                    />

                    <Link className='btn btn-default GamePage-link-margin' to='/settings'>
                        Difficulty
                    </Link>

                    <NewGameButton 
                        handleNewGameClick={handleNewGameClick}
                    />
                </div>
            </div>

            <footer className='header-footer'>
                {winTries ? `You won in ${winTries} guesses!` : 'Good luck!'}
            </footer>

        </div>
    )
}