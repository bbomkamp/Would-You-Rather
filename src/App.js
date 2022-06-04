import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Signin from './components/Signin';
import Navbar from './components/Navbar';

function App() {
  return (
    
    <Router>
      <Navbar />
      <Switch>
        <Route exact path = {'/'} component = {Home}/>
        <Route exact path = {'/signin'} component = {Signin}/>
      </Switch>
    </Router>
  );
}

export default App;
