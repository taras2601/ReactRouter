import React from 'react';
import './App.css';
import Nav from './Nav'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TodoListContainer from "./features/todo/TodoListContainer";
import CounterContainer from "./features/counter/CounterContainer";


function App() {
  return (
      <Router>
          <div className="App">
              <Nav />
              <Switch>
                  <Route path="/features/todo" component={TodoListContainer} />
                  <Route path="/features/counter" component={CounterContainer} />
              </Switch>
          </div>
      </Router>
  );
}

export default App;
