import React from "react";
import "./assets/scss/App.scss";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserCard from "./components/UserCard";
import About from "./containers/About";
import Layout from "./components/Layout";
import WorkersContainer from "./containers/WorkersContainer";
import WorkerLogin from "./containers/WorkerLogin";

const App = () => (
  // Here will be the componentes
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={WorkersContainer} />
        <Route exact path="/nosotros" component={About} />
        <Route exact path="/login" component={WorkerLogin} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
