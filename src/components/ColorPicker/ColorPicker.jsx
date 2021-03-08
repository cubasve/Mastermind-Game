/* Doesn't work with function declarations */
/* Array.prototype.map() expects a return value from arrow function  array-callback-return */

// import React from 'react';
// import styles from './ColorPicker.module.css';

// export default function ColorPicker({ 
//     colors, 
//     handleColorSelection, 
//     selectedColorIndex }) {

//     return (
//         <div className='ColorPicker'>
//             COLOR PICKER
//             {colors.map((color, index) => {
//                 <button 
//                     key={color}
//                     className='button'
//                     style={{
//                         backgroundColor: selectedColorIndex === index ? 'white' : color,
//                         borderColor: color,
//                     }}
//                     onClick={() => handleColorSelection(index)}
//                 />
//             })}
//         </div>
//     )
// }

import React from 'react';
import styles from './ColorPicker.module.css';

const ColorPicker = ({ colors, handleColorSelection, selectedColorIndex }) => (
  <div className={styles.ColorPicker}>
    {colors.map((color, index) =>
      <button
        key={color}
        className={styles.button}
        style={{
          backgroundColor: selectedColorIndex === index ? 'white' : color,
          borderColor: color
        }}
        onClick={() => handleColorSelection(index)}
      />
    )}
  </div>
);

export default ColorPicker;