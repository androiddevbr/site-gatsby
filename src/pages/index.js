import React from "react";
import { createMemoryHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";
import 'typeface-roboto';
import 'typeface-roboto-slab';
// pages for this product
import LandingPage from "./LandingPage/LandingPage.jsx";
import Helmet from "react-helmet";

let hist = createMemoryHistory();

export default () => (
  <div className="application">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Android DEV BR</title>
    </Helmet>
    <Router history={hist}>
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  </div>
);
