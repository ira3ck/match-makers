import "./App.css";
//import Welcome from './components/Welcome';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./pages";
import Profile from "./pages/profile";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import squad from "./pages/squad";
import SideBar from "./components/sideBar";

function App() {
  return (
    //<Welcome/>
    <Router>
      <SideBar>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/squad" component={squad} />
        </Switch>
      </SideBar>
    </Router>
  );
}

export default App;
