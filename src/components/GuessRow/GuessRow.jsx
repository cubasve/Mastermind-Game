import React from 'react';
import GuessPegs from '../GuessPegs/GuessPegs';
import GuessScore from '../GuessScore/GuessScore';
import ScoreButton from '../ScoreButton/ScoreButton';
import styles from './GuessRow.module.css';

export default function GuessRow({ colors, currentGuess, guess, rowIndex}) {
    return (
        <div className={styles.GuessRow}>
            GUESS ROW
            <div 
                className={styles.rowNumber}
                style={{color : currentGuess ? 'black' : 'lightgrey'}}
            >
                {rowIndex + 1}
            </div>

            <GuessPegs 
                code={guess.code}
                colors={colors}
                currentGuess={currentGuess}
            />
            {currentGuess ? 
                <ScoreButton /> : 
                <GuessScore score={guess.score} />
            }
        </div>
    )
}