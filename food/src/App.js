import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import './styles.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './screens/Home';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import { Provider } from './context/FoodContext';


class App extends Component {
  render() {
    return (
      <Provider>
      <Router>
        <Switch>
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route path="/" component={Home} />
          
        </Switch>
      </Router>
      </Provider>
    );  
  }
}
export default App;