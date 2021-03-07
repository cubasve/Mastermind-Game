import React from 'react';
import GuessPegs from '../GuessPegs/GuessPegs';
import GuessScore from '../GuessScore/GuessScore';
import ScoreButton from '../ScoreButton/ScoreButton';

export default function GuessRow({ rowIndex, colors, guess, currentGuess}) {
    return (
        <div className="flex-h">
            <div>{rowIndex + 1}</div>
            <GuessPegs 
                colors={colors}
                code={guess.code}
            />
            {currentGuess ? <ScoreButton /> : <GuessScore />}
        </div>
    )
}