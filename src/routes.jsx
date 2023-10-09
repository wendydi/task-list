import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import CompletedTasks from './pages/CompletedTasks'; 
import IncompleteTasks from './pages/IncompleteTasks'; 

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/completed" component={CompletedTasks} />
      <Route path="/incomplete" component={IncompleteTasks} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
