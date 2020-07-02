import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ClickSquare from './ClickSquare';
import '../Clickers.css';

const ClickGrid = ({ going }) => {
  const [pattern, setPattern] = useState(Array(25).fill(false));
  
  return (
    <div className="click-grid"> {
      pattern.map((x, i) => (
        <ClickSquare
          key={`square${i}`}
          going={going}
          clickSquare={() => setPattern(p => {
            const newArray = Array.from(p);
            newArray[i] = !p[i];
            return newArray;
          })}
          pattern={pattern}
          clicked={pattern[i]}
        />
      ))}
    </div>
  );
};

ClickGrid.propTypes = {
  going: PropTypes.bool,
};

ClickGrid.defaultProps = {
  going: false,
};

export default ClickGrid;
