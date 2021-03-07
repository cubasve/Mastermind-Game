import React from 'react';
import GuessPegs from '../GuessPegs/GuessPegs';
import GuessScore from '../GuessScore/GuessScore';
import ScoreButton from '../ScoreButton/ScoreButton';

export default function GuessRow({ colors, currentGuess, guess, rowIndex}) {
    return (
        <div>
            GUESS ROW
            <div style={{color : currentGuess ? 'black' : 'lightgrey'}}>
                {rowIndex + 1}
            </div>

            <GuessPegs 
                colors={colors}
                code={guess.code}
            />
            {currentGuess ? 
                <ScoreButton /> : 
                <GuessScore score={guess.score} />
            }
        </div>
    )
}