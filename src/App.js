import React from "react";
import "./assets/scss/App.scss";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserCard from "./components/UserCard";
import About from "./containers/About";
import Layout from "./components/Layout";

const App = () => (
  // Here will be the componentes
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/userCard" component={UserCard} />
        <Route exact path="/nosotros" component={About} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
