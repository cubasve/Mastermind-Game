import React from 'react';
import './GuessScore.css';

export default function GuessScore({ score }) {
    let scores = (
        'P'.repeat(score.perfect) + 
        'A'.repeat(score.almost) + 
        'I'.repeat(4 - score.perfect - score.almost)
        ).split('');
        // console.log('scores', scores);
        //Ex: scores = ['A', 'I', 'P', 'A']

    let baseStyle = {
        width: 10,
        height: 10,
        margin: 1,
        border: '2px solid',
        borderRadius: '50%',
    }

    let pegStyle = {
        'P': { //perfect
            borderColor: 'black',
            backgroundColor: 'black',
        },
        'A': { //almost
            borderColor: 'black',
            backgroundColor: 'white',
        },
        'I': { //incomplete
            borderColor: 'white',
            backgroundColor: 'lightgrey',
        },
    }

    return (
        <div className='GuessScore'>
            {scores.map((score, index) => 
                <div 
                    key={index}
                    style={{...baseStyle, ...pegStyle[score]}}
                />
            )}
        </div>
    )
}