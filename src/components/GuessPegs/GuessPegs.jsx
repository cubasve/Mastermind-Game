import React from 'react';
import GuessPeg from '../GuessPeg/GuessPeg';
import './GuessPegs.css';

export default function GuessPegs({ colors, code, currentGuess, handlePegClick }) {
    return (
        <div className='GuessPegs'>
            GUESS PEGS
            <GuessPeg 
                color={colors[code[0]]}
                currentGuess={currentGuess}
                handlePegClick={() => handlePegClick(0)}
            />
            <GuessPeg 
                color={colors[code[1]]}
                currentGuess={currentGuess}
                handlePegClick={() => handlePegClick(1)}
            />
            <GuessPeg 
                color={colors[code[2]]}
                currentGuess={currentGuess}
                handlePegClick={() => handlePegClick(2)}
            />
            <GuessPeg 
                color={colors[code[3]]}
                currentGuess={currentGuess}
                handlePegClick={() => handlePegClick(3)}
            />
        </div>
    )
}