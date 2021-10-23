import "./App.css";
//import Welcome from './components/Welcome';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import index from "./pages";
import profile from "./pages/profile";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";

function App() {
  return (
    //<Welcome/>
    <Router>
      <Switch>
        <Route exact path="/" component={index} />
        <Route exact path="/profile" component={profile} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
