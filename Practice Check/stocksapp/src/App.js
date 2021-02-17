import logo from './logo.svg';
//import './App.css';
import MenuComponent from './Components/MenuComponent';

function App() {
  let loggedin=true;
  return (
    <div className="App">
      <MenuComponent loggedin={loggedin}/>
    </div>
  );
}
export default App;
