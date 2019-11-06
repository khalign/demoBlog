import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar';
import Homepage from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import Article from './pages/Article';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id='page-body' >
          <Switch>
            <Route path='/' component={Homepage} exact />
            <Route path='/about' component={About} />
            <Route path='/articles' component={Articles} />
            <Route path='/article/:name' component={Article} />
            <Route component={NotFound}  />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
