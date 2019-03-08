import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import TIndexPage from './routes/TIndexPage';
//import Products from './routes/Products';
//import TDemoListPage from './routes/TDemoListPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={TIndexPage} />
         {/* <Route path="/products" exact component={Products} /> */}
         {/* <Route path="/demolists" exact component={TDemoListPage} /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
