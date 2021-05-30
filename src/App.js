import logo from './logo.jpg';
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"></img> 
        <h1>My Dictionary</h1>
      </header>
      <main>
        <Dictionary defaultKeyword = "dictionary"/>
      </main>
      <footer className="myFooter">Coded by Alexane Jouglar | <a href="https://github.com/AlexaneJ/my_react_dictionary">Open source code</a> available on GitHub</footer>
      </div>
    </div>
  );
}

export default App;
