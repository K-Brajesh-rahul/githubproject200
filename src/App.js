import logo from './logo.svg';
import './App.css';
import Rahul from "./Components/Rahul"
import Venkatesh from "./Components/Venkatesh"
import Venkatesh from "./Components/Charan"
import Sum from "./Components/Sum"

function App() {
  return (
    <div className="App">
      <h1>Github Project 200</h1>
      <Rahul/>
      <Venkatesh/>
      <Charan/>
      <Sum a={91} b={44}/>
    </div>
  );
}

export default App;
