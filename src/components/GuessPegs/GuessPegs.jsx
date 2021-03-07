import React from 'react';
import GuessPeg from '../GuessPeg/GuessPeg';

export default function GuessPegs({ colors, code }) {
    return (
        <div>
            <GuessPeg color={colors[code[0]]}/>
            <GuessPeg color={colors[code[1]]}/>
            <GuessPeg color={colors[code[2]]}/>
            <GuessPeg color={colors[code[3]]}/>
        </div>
    )
}