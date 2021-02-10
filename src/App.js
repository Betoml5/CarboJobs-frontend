import React from "react";
import "./assets/scss/App.scss";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./containers/About";
import Layout from "./components/Layout";
import WorkersContainer from "./containers/WorkersContainer";

const App = () => (
  // Here will be the componentes
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={WorkersContainer} />
        <Route exact path="/nosotros" component={About} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
