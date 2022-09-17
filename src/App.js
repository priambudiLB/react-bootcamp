import logo from './logo.svg';
import './App.css';
function App() {
  const age = 10;
  const progress = 100;
  const appClassname = 'App hehe'
  const name = `Bagaskara berumur ${age} tahun`;
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
  return (
    <div className={appClassname}>
      <header className="App-header">
        <h1>{name}</h1>
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
