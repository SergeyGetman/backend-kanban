import logo from "./logo.svg";
import "./App.css";
import User from "./getuser/User";


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
      <User />
      </div>
    </div>
  );
}

export default App;
