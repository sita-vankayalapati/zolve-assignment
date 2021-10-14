
import './App.css';
import CopytoClipboard from './components/CopyToClipBoard';
import Navigation from './components/Navigation';
import BarChart from "./components/BarChart";
import Error from "./components/Error";
import {Route,Switch} from "react-router-dom";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <List/>
      <BarChart/>
      <Switch>
        <Route exact path="/" component={Home}/>
      < Route  path="/barchart" component={BarChart}/>
     < Route  path="/copytoclipboard" component={CopytoClipboard}/>
     <Route component={Error}/>
     </Switch>

    </div>
  );
}
const Home=()=>{
  return(<p>Home Page</p>)
}

export default App;
