import React from 'react';
import PropTypes from 'prop-types';

const RecurserSquare = ({ pattern, color, size }) => {
  if (size < 20) {
    return (
      <div
        width={`${size}px`}
        height={`${size}px`}
        style={{
          backgroundColor: color,
        }}
      />
    );
  }

  return (
    <div>
      <RecurserSquare color={color} size={size / 5} pattern={pattern} />
      <RecurserSquare color={color} size={size / 5} pattern={pattern} />
      <RecurserSquare color={color} size={size / 5} pattern={pattern} />
      <RecurserSquare color={color} size={size / 5} pattern={pattern} />
      <RecurserSquare color={color} size={size / 5} pattern={pattern} />
      <RecurserSquare color={color} size={size / 5} pattern={pattern} />
      <RecurserSquare color={color} size={size / 5} pattern={pattern} />
      <RecurserSquare color={color} size={size / 5} pattern={pattern} />
      <RecurserSquare color={color} size={size / 5} pattern={pattern} />
      <RecurserSquare color={color} size={size / 5} pattern={pattern} />
      <RecurserSquare color={color} size={size / 5} pattern={pattern} />
      <RecurserSquare color={color} size={size / 5} pattern={pattern} />
      <RecurserSquare color={color} size={size / 5} pattern={pattern} />
      <RecurserSquare color={color} size={size / 5} pattern={pattern} />
      <RecurserSquare color={color} size={size / 5} pattern={pattern} />
      <RecurserSquare color={color} size={size / 5} pattern={pattern} />
      <RecurserSquare color={color} size={size / 5} pattern={pattern} />
      <RecurserSquare color={color} size={size / 5} pattern={pattern} />
      <RecurserSquare color={color} size={size / 5} pattern={pattern} />
      <RecurserSquare color={color} size={size / 5} pattern={pattern} />
      <RecurserSquare color={color} size={size / 5} pattern={pattern} />
      <RecurserSquare color={color} size={size / 5} pattern={pattern} />
      <RecurserSquare color={color} size={size / 5} pattern={pattern} />
      <RecurserSquare color={color} size={size / 5} pattern={pattern} />
      <RecurserSquare color={color} size={size / 5} pattern={pattern} />
    </div>
  );
};

RecurserSquare.propTypes = {
  color: PropTypes.oneOf('white', 'black').isRequired,
  pattern: PropTypes.arrayOf(PropTypes.bool).isRequired,
  size: PropTypes.number.isRequired,
};

export default RecurserSquare;
