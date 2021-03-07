import React from 'react';

export default function ColorPicker({colors}) {
    return (
        <div>
            {colors.map(color => {
                <button key={color}>{color}</button>
            })}
        </div>
    )
}