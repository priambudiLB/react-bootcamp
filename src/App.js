import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const list = ['ubuntu', 'windows', 'macos', 'manjaro', 'android']
const employees = [
  {
    name: "bagas",
    age: 10
  },
  {
    name: "lintang",
    age: 11
  }
]
const progress = 100;
const appClassname = 'App hehe'

function App() {
  const [counter, setCounter] = useState(0)
  const [status, setStatus] = useState('Child')
  const addAge = () => {
    setCounter(prev => prev + 1)
  }

  const subAge = () => {
    setCounter(prev => prev - 1)
  }

  const resetAge = () => {
    setCounter(0)
  }

  useEffect(() => {
    console.log('useeffect 1')
    if (counter >= 17) {
      setStatus('Adult')
    } else {
      setStatus('Child')
    }
  }, [counter])

  useEffect(() => {
    // biasanya dipake buat call API, 1x aja di awal.
    console.log('useeffect 2')
  }, [])

  const age = counter;
  const name = `Bagaskara berumur ${age} tahun`;
  return (
    <div className={appClassname}>
      <header className="App-header">
        <h1>{name}</h1>
        <p>{status}</p>
        <button onClick={addAge}>+</button>
        <button onClick={resetAge}>RESET</button>
        <button onClick={subAge}>-</button>
        <div className="progress" style={{ width: '80%' }}>
          <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">{progress}%</div>
        </div>
        <ul className="list-group">
          {
            employees.map((value, index) => <li className="list-group-item">{value.name} berumur {value.age}</li>)
          }
        </ul>
        <ul className="list-group">
          {
            list.map((value, index) => <li className="list-group-item">{value}</li>)
          }
        </ul>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
