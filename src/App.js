import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from './components/form';
import ProductDetail from './components/productDetail';
import ProductCancel from './components/cancelledProduct';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/product-detail" component={ProductDetail} />
          <Route exact path="/product-cancel" component={ProductCancel} />
        </Switch>
      </Router>
    );
  }
}
