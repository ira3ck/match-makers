import "./App.css";
//import Welcome from './components/Welcome';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./pages";
import profile from "./pages/profile";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import squad from "./pages/squad";

function App() {
  return (
    //<Welcome/>
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/profile" component={profile} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/squad" component={squad} />
      </Switch>
    </Router>
  );
}

export default App;
