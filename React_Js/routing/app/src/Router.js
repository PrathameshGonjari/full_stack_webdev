import './App.css';
import React from 'react'
import { Route, Switch } from 'react-router-dom';
import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Players from './components/Players';
function Router(){

  return(
    <div>
      <Navigation />
      <Switch>
          <Route exact path = '/ ' component={App}/>
          <Route exact path = '/about' component={About}/>
          <Route exact path = '/contact' component={Contact}/>
          <Route exact path = '/players' component={Players}/>
      </Switch>
    </div>
  )
}

export default Router;