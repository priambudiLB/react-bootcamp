import logo from './logo.svg';
import './App.css';
import Age from './Age'
import { useEffect, useState } from 'react';
import Progress from './Progress';
import CatFact from './CatFact';

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
const appClassname = 'App hehe'

function App() {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    // biasanya dipake buat call API, 1x aja di awal.
    console.log('useeffect 2')
  }, [])
  return (
    <div className={appClassname}>
      <header className="App-header">
        <CatFact />
        <Age counter={counter} setCounter={setCounter} />
        <Progress progress={counter} />
        <Progress progress={100} />
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
