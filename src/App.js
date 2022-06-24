import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) =>
            !currentUser ? <Home {...props} /> : <Redirect to="/dashboard" />
          }
        />
        <Route
          exact
          path="/dashboard"
          render={(props) =>
            currentUser ? <Dashboard {...props} /> : <Redirect to="/" />
          }
        />

        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </>
  );
}

export default App;
