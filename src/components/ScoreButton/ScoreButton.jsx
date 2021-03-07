import React from 'react';
import styles from './ScoreButton.module.css';

export default function ScoreButton({ disabled, handleScoreClick }) {
    return (
        <button 
            className={`${styles.button} btn btn-default`}
            disabled={disabled}
            onClick={handleScoreClick}
        >
            ✔
        </button>
    )
}