import React from 'react';
import GuessPeg from '../GuessPeg/GuessPeg';
import './GuessPegs.css';

export default function GuessPegs({ colors, code }) {
    return (
        <div className='GuessPegs'>
            GUESS PEGS
            <GuessPeg color={colors[code[0]]}/>
            <GuessPeg color={colors[code[1]]}/>
            <GuessPeg color={colors[code[2]]}/>
            <GuessPeg color={colors[code[3]]}/>
        </div>
    )
}