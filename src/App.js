import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import Header from './components/Header';
import Watchlist from './components/Watchlist';
import Watched from './components/Watched';
import Add from './components/Add';
import "./lib/font-awesome/css/all.min.css"

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Watchlist}/>
        <Route path="/watched" component={Watched}/>
        <Route path="/add" component={Add}/>
      </Switch>
    </Router>
  );
}

export default App;
