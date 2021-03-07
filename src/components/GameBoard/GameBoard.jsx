import React from 'react';
import GuessRow from '../GuessRow/GuessRow';
import styles from './GameBoard.module.css';

export default function GameBoard({ colors, guesses, handlePegClick, handleScoreClick }) {
    return (
        <div className={styles.GameBoard}>
            GAME BOARD
            {guesses.map((guess, index) => (
                <GuessRow 
                    guess={guess}
                    colors={colors}
                    rowIndex={index}
                    currentGuess={index === (guesses.length - 1)}
                    key={index}
                    handlePegClick={handlePegClick}
                    handleScoreClick={handleScoreClick}
                />
            ))}
        </div>
    )
}