import React, { useState } from 'react';
import { ClickGrid } from './components';
import './App.css';

const App = () => {
  const [going, setGoing] = useState(false);

  return (
    <>
      <h1>Reactal</h1>
      <h2>Recursively generate fractals in a react app.</h2>
      <span>
        Click on the grid below to define a pattern, and then `let 'er rip` to let react recursively generate a fractal.
      </span>
      <ClickGrid going={going} />
      <button
        onClick={() => {
          setGoing((g) => !g);
        }}
      >
        {!going ? `Let 'er rip` : `Give 'er the ole' reset`}
      </button>
    </>
  );
};

export default App;
