import React from 'react';
import PropTypes from 'prop-types';

import ClickSquare from './ClickSquare';
import '../Clickers.css';

const ClickGrid = ({ going }) => {
  return (
    <div className="click-grid">
      <ClickSquare going={going} />
      <ClickSquare going={going} />
      <ClickSquare going={going} />
      <ClickSquare going={going} />
      <ClickSquare going={going} />
      <ClickSquare going={going} />
      <ClickSquare going={going} />
      <ClickSquare going={going} />
      <ClickSquare going={going} />
      <ClickSquare going={going} />
      <ClickSquare going={going} />
      <ClickSquare going={going} />
      <ClickSquare going={going} />
      <ClickSquare going={going} />
      <ClickSquare going={going} />
      <ClickSquare going={going} />
      <ClickSquare going={going} />
      <ClickSquare going={going} />
      <ClickSquare going={going} />
      <ClickSquare going={going} />
      <ClickSquare going={going} />
      <ClickSquare going={going} />
      <ClickSquare going={going} />
      <ClickSquare going={going} />
      <ClickSquare going={going} />
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
