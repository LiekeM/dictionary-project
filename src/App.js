import logo from "./dictionary.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Dictionary</h1>
        <a href="#" className="btn btn-warning">
          Click here
        </a>
      </header>
    </div>
  );
}

export default App;
