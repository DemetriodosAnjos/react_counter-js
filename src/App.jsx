import { useState } from 'react';
import './App.scss';

export const App = () => {
  // --- STATE ---
  const [count, setCount] = useState(0);

  // --- HANDLERS SOLUTION ---
  const addOne = () => {
    // usa UPDATE funcional para evitar problemas ao chamar várias setState
    setCount(c => c + 1);
  };

  const add100 = () => {
    // idem: incremento baseado no valor anterior
    setCount(c => c + 100);
  };

  // DON'T change the code below
  const increase = () => {
    if (count % 5 === 0) {
      add100();
    }

    addOne();
  };

  return (
    <div className="App">
      <h1 className="App__title">{`Count: ${count}`}</h1>

      <button type="button" className="App__add-one" onClick={addOne}>
        Add 1
      </button>

      <button type="button" className="App__add-100" onClick={add100}>
        Add 100
      </button>

      <button type="button" className="App__increase" onClick={increase}>
        Increase
      </button>
    </div>
  );
};
