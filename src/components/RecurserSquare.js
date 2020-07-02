import React from 'react';
import PropTypes from 'prop-types';

const RecurserSquare = ({ pattern, color, size }) => {
  if (size < 4 || color === 'white') {
    return (
      <div
        style={{
          backgroundColor: color,
          height: size,
          width: size,
        }}
      />
    );
  }

  return (
    <div className="recurser" style={{ height: size, width: size }}>
      {pattern.map((x,i) => (
        <RecurserSquare
          color={color === 'black' && pattern[i] ? 'black' : 'white'}
          size={size/5}
          pattern={pattern}
        />
      ))}
    </div>
  );
};

RecurserSquare.propTypes = {
  color: PropTypes.oneOf(['white', 'black']).isRequired,
  pattern: PropTypes.arrayOf(PropTypes.bool).isRequired,
  size: PropTypes.number.isRequired,
};

export default RecurserSquare;
