import React from 'react';
import styles from './ColorPicker.module.css';

export default function ColorPicker({ colors, handleColorSelection, selectedColorIndex }) {
    return (
        <div>
            COLOR PICKER
            {colors.map((color, index) => {
                <button 
                    key={color}
                    className={styles.button}
                    style={{
                        backgroundColor: selectedColorIndex === index ? 'white' : color,
                        borderColor: color,
                    }}
                    onClick={e => handleColorSelection(index)}
                />
            })}
        </div>
    )
}