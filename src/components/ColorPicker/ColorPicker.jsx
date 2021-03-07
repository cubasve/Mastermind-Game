import React from 'react';
import styles from './ColorPicker.module.css';

export default function ColorPicker({ colors, selectedColorIndex }) {
    return (
        <div>
            COLOR PICKER
            {colors.map((color, index) => {
                <button 
                    key={color}
                    className={styles.button}
                    style={{
                        backgroundColor: selectedColorIndex === index ? 'red' : 'red',
                        borderColor: color,
                    }}
                />
            })}
        </div>
    )
}