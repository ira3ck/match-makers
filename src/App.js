import "./App.css";
//import Welcome from './components/Welcome';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./pages";
import Profile from "./pages/profile";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import squad from "./pages/squad";
import SideBar from "./components/sideBar";
import Preferences from "./pages/preferences";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";
import PrivateRoute from "./components/session/PrivateRoute";
import Logout from "./components/session/Logout";
import Login from "./components/session/Login";
import History from "./utils/History";

const theme = createTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  return (
    //<Welcome/>
    <ThemeProvider theme = {theme}>
      <Router history= {History}>
        <SideBar>
          <Switch>
            <PrivateRoute exact path="/" component={Index} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/squad" component={squad} />
            <Route path="/login" component={Login} exact/>
            <Route path="/logout" component={Logout} exact/>
          </Switch>
        </SideBar>
      </Router>
    </ThemeProvider>
  );
}

export default App;
