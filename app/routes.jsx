import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/layouts';

import Home from './components/pages/home';
import About from './components/pages/about';
import Products from './components/pages/products';

import NotFound from './components/pages/not-found';


export default () => (
  <Layout name="main">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/articles" component={Products} />

      <Route component={NotFound} />
    </Switch>
  </Layout>
);
