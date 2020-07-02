import React, { useState } from 'react';
import PropTypes from 'prop-types';

import RecurserSquare from './RecurserSquare';

import '../Clickers.css';

const ClickSquare = ({ going }) => {
  const [clicked, setClicked] = useState(false);
  
  if (going) {
    return (
      <RecurserSquare 
        color={clicked ? 'black' : 'white'}
        size={100}
      />
    );
  }

  return (
    <div
      onClick={() => {
        setClicked((c) => !c);
      }}
      className={`click-square ${clicked ? 'black' : ''}`}
    />
  );
};

ClickSquare.propTypes = {
  going: PropTypes.bool.isRequired,
};

ClickSquare.defaultProps = {
  going: false,
};

export default ClickSquare;
