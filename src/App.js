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
        <footer>
          This SheCodes student{" "}
          <a href="https://github.com/LiekeM/dictionary-project" rel="external">
            project is open source
          </a>{" "}
          and coded by Lieke van der Made
        </footer>
      </div>
    </div>
  );
}

export default App;
