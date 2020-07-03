import React, { useState } from 'react';
import { ClickGrid } from './components';
import './App.css';

const App = () => {
  const [going, setGoing] = useState(false);

  const body = 'Click on the grid below to define a patter and then "let \'er rip" to generate a fractal.';

  const clickHandler = () => { setGoing(g => !g); };

  return (
    <>
      <h1>Reactal</h1>
      <h2>Recursively generate fractals in a react app.</h2>
      <span>{body}</span>
      <ClickGrid going={going} />
      <button
        type="button"
        onClick={clickHandler}>
        {!going ? "Let 'er rip" : "Give 'er the ole' reset"}
      </button>
    </>
  );
};

export default App;
