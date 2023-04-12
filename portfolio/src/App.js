import logo from './logo.svg';
import './App.css';
import Nav from './compo/Nav';
import About from './compo/About';
import Whatido from './compo/Whatido';

function App() {
  return (
    <div className="App">
      <Nav className="Nav" />
      <div>
        <About />
        <Whatido />
      </div>
    
    </div>
  );
}

export default App;
