/* Doesn't work with function declarations */

// import React from 'react';
// import styles from './ColorPicker.module.css';

// export default function ColorPicker({ 
//     colors, 
//     handleColorSelection, 
//     selectedColorIndex }) {

//     return (
//         <div className={styles.ColorPicker}>
//             COLOR PICKER
//             {colors.map((color, index) => {
//                 <button 
//                     key={color}
//                     className={styles.button}
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
      COLOR PICKER
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