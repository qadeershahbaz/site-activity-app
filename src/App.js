import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Switch, Route, Redirect } from "react-router-dom";
import AppContainer from "./containers/app-container/AppContainer";
import routes from "./app-routes/appRoutes";

function App() {
  return (
    <div className="App">
      <AppContainer>
        <Route exact path="/">
          <Redirect to="/activity" />
        </Route>

        {routes.map(({ path, name, Component }, key) => {
          return <Route exact path={path} component={Component} />;
        })}

        
      </AppContainer>
    </div>
  );
}

export default withAuthenticator(App);
