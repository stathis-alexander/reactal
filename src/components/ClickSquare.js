import React from 'react';
import PropTypes from 'prop-types';

import RecurserSquare from './RecurserSquare';

import '../Clickers.css';

const ClickSquare = ({ going, clickSquare, pattern, clicked }) => {
  const size = 100;

  if (going) {
    return <RecurserSquare color={clicked ? 'black' : 'white'} pattern={pattern} size={size} />;
  }

  return (
    <div
      role="button"
      onClick={clickSquare}
      className={`click-square ${clicked ? 'black' : ''}`}
      style={{
        height: size,
        width: size,
      }}
    />
  );
};

ClickSquare.propTypes = {
  going: PropTypes.bool.isRequired,
  clicked: PropTypes.bool.isRequired,
  clickSquare: PropTypes.func.isRequired,
  pattern: PropTypes.array.isRequired,
};

export default ClickSquare;
