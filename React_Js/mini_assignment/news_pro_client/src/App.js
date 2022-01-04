import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import AppLoader from './Components/AppLoader';
import HeadlinesContainer from './Containers/HeadlinesContainer'
import BusinessContainer from './Containers/BusinessContainer';
import TechnologyContainer from './Containers/TechnologyContainer';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={AppLoader} />
      <Route exact path='/dashboard' component={HeadlinesContainer}/>
      <Route exact path='/headlines' component={HeadlinesContainer}/>
      <Route exact path='/business' component={BusinessContainer}/>
      <Route exact path='/technology' component={TechnologyContainer}/>
    </Switch>
  );
}

export default App;
