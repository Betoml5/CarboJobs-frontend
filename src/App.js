import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./assets/scss/App.scss";

import Layout from "./components/Layout";
import UserDetail from "./components/UserDetail";

import About from "./containers/About";
import WorkerLogin from "./containers/Workers/WorkerLogin";
import WorkersContainer from "./containers/Workers/WorkersContainer";
import WorkerRegister from "./containers/Workers/WorkerRegister";
import UserLogin from "./containers/Users/UserLogin";
import UserRegister from "./containers/Users/UserRegister";
const App = () => (
  // Here will be the componentes
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact={true} path="/" component={WorkersContainer} />
        <Route exact={true} path="/workers/login" component={WorkerLogin} />
        <Route
          exact={true}
          path="/workers/register"
          component={WorkerRegister}
        />

        
        <Route exact={true} path="/users/register" component={UserRegister} />
        <Route exact={true} path="/users/login" component={UserLogin} />
        <Route exact={true} path="/users/detail" component={UserDetail} />

        <Route exact={true} path="/nosotros" component={About} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
