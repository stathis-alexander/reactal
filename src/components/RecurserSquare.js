import React from 'react';
import PropTypes from 'prop-types';

const RecurserSquare = ({ pattern, color, size }) => {
  if (size === 1) {
  }

  return (
    <div
      width="1px"
      height="1px"
      style={{
        backgroundColor: color,
      }}
    />
  );
};

RecurserSquare.propTypes = {
  color: PropTypes.oneOf('white', 'black').isRequired,
  pattern: PropTypes.array.isRequired,
  size: PropTypes.number.isRequired,
};

export default RecurserSquare;
