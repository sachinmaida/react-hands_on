import logo from './logo.svg';
import './App.css';
import Listofplayers from './Components/Listofplayers';
import IndiaPlayers from './Components/IndianPlayers';

function App() {
  return (
    <div className="App">
      <Listofplayers/>
      <IndiaPlayers/>
    </div>
  );
}

export default App;
