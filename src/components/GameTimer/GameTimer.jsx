import React from 'react';
import styles from './GameTimer.module.css';

export default function GameTimer(props) {
    return (
        <div className={`${styles.GameTimer} flex-h`}>
            00:00
        </div>
    )
}