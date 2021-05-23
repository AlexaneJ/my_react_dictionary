import logo from './logo.jpg';
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"></img>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="myFooter">Coded by Alexane Jouglar | Open source code available on GitHub</footer>
      </div>
    </div>
  );
}

export default App;
