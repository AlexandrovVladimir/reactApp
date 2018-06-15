import React, { Component } from 'react';
import { CommentForm } from './form/CommentForm';
//компоненты в фигурных скобках
import {Router, Route, Link} from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
const About = () => (
  <div>
    <h2>About</h2>
  </div>
);
const Contacts = () => (
  <div>
    <h2>Contacts</h2>
  </div>
);

class Navigation extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contacts '>Contacts</Link></li>
          </ul>

          <hr />

          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contacts ' component={Contacts} />
        </div>
      </Router>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <div className="comment-box">
          <CommentForm />
        </div>
      </div>
    )
  }
}

export default App;