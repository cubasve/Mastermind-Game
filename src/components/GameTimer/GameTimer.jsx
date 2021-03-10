import React, { Component, useEffect } from 'react';
import styles from './GameTimer.module.css';

function formatTime(secs) {
    //toString(): converts a number to a string

    //.padStart(2, '0'): there will always be 2 numbers 
    //- if it's a single digit, there will be a 0 infront of it (ex. 5 --> 05)
    let minutes = Math.floor(secs / 60).toString().padStart(2, '0');
    let seconds = (secs % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}

/*
//Class Component using Lifecycle Methods
export default class GameTimer extends Component {

    handleTick = () => {
        if (!this.props.isTiming) return;
        this.props.handleTimerUpdate();
    }

    componentDidMount() {
        this.timerId = setInterval(this.handleTick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div className={`${styles.GameTimer} flex-h`}>
                {formatTime(this.props.elapsedTime)}
            </div>
        )
    }
}
*/

//Function Component using React Hooks
export default function GameTimer({ 
    elapsedTime, 
    handleTimerUpdate, 
    isTiming }) {

    const handleTick = () => {
        if (!isTiming) return;
        handleTimerUpdate();
    }

    useEffect(() => {
        let timerId = setInterval(handleTick, 1000);

        return () => {
            clearInterval(timerId);
        }
    }, [handleTick])


    return (
        <div className={`${styles.GameTimer} flex-h`}>
            {formatTime(elapsedTime)}
        </div>
    )
}