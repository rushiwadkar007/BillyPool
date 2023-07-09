import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/UI/Wrapper";

import Home from "./pages/Home";

function App() {
  return (
    <Wrapper>
      <Navigation />
      <main>
        <Home />
      </main>
      <Footer />
    </Wrapper>
  );
}

export default App;

/*



import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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


*/
