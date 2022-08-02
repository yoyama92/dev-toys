import { useState } from 'react';

import yaml from 'js-yaml';
import './App.css';

import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0);

  try {
    const value = {
      test: 'aaa',
      'nest-test': {
        value1: 'aaa',
        value2: 'bbb',
        value3: {
          value4: 'ccc',
        },
      },
    };
    console.log(JSON.stringify(value));
    const doc = yaml.load(JSON.stringify(value), {
      json: true,
    });
    console.log(doc);

    console.log(yaml.dump(doc));
  } catch (e) {
    console.log(e);
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
