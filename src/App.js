// import logo from "./dictionary.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>DICTIONARY</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>SheCodes student project coded by Lieke van der Made</footer>
      </div>
    </div>
  );
}

export default App;
