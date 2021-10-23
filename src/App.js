import logo from './logo.svg';
import './App.css';
//import Welcome from './components/Welcome';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import index from './pages';
import profile from './pages/profile';

function App() {
  return (
    //<Welcome/>
    <Router>
      <Switch>
        <Route exact path="/" component={index} />
        <Route exact path="/profile" component={profile} />
      </Switch>
    </Router>
  );
}

export default App;
