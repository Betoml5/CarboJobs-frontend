import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./assets/scss/App.scss";

import About from "./containers/About";
import Layout from "./components/Layout";
import WorkersContainer from "./containers/WorkersContainer";
import WorkerLogin from "./containers/WorkerLogin";
import WorkerRegister from "./containers/WorkerRegister";

const App = () => (
  // Here will be the componentes
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact={true} path="/" component={WorkersContainer} />
        <Route exact={true} path="/nosotros" component={About} />
        <Route exact={true} path="/login" component={WorkerLogin} />
        <Route
          exact={true}
          path="/workers/register"
          component={WorkerRegister}
        />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
