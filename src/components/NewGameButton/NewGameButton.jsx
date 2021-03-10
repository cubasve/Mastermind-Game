import React from 'react';

export default function NewGameButton({ handleNewGameClick }) {
    return (
        <button 
            className='btn btn-default'
            onClick={handleNewGameClick}
        >
            New Game
        </button>
    )
}
