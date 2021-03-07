import React from 'react';
import styles from './ScoreButton.module.css';

export default function ScoreButton(props) {
    return (
        <button className={`${styles.button} btn btn-default`}>
            ✔
        </button>
    )
}