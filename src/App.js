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
import createSquad from "./pages/crearSquad";

import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";
import PrivateRoute from "./components/session/PrivateRoute";
import Logout from "./components/session/Logout";
import Login from "./components/session/Login";
import History from "./utils/History";
import { Auth0Provider } from "@auth0/auth0-react";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  return (
    //<Welcome/>
    <ThemeProvider theme={theme}>
      <Auth0Provider>
        <Router history={History}>
          <SideBar>
            <Switch>
              <PrivateRoute exact path="/" component={Index} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <Route exact path="/sign-in" component={SignIn} />
              <Route exact path="/sign-up" component={SignUp} />
              <Route exact path="/squad" component={squad} />
              <Route path="/login" component={Login} exact />
              <Route path="/logout" component={Logout} exact />
              <Route exact path="/preferences" component={Preferences} />
              <Route exact path="/createSquad" component={createSquad} />
            </Switch>
          </SideBar>
        </Router>
      </Auth0Provider>
    </ThemeProvider>
  );
}

export default App;
