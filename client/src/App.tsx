import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          height="50px"
          width="50px"
          className="App-logo"
          alt="logo"
        />
      </header>

      <div>
        <h1 className="brick">Hello body</h1>
      </div>
    </div>
  );
}

export default App;
