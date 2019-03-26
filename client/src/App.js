import React, { Component } from 'react';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import List from './component/ListPage';
import Form from './component/AddForm';
import Detail from './component/DetailProduct';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
         <BrowserRouter>
        <Switch>
        <Route exact path='/' component={List}></Route>
        <Route exact path='/AddForm' component={Form}></Route>
        <Route exact path='/DetailProduct' component={Detail}></Route>
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


export default App