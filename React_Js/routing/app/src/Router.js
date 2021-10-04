import './App.css';
import React,{Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Players from './components/Players';
import PlayerContainer from './Containers/PlayerContainer';
class Router extends Component{
  state= {
    players:[
      {
        'id':1,   
        'name':'Cristiano',
        'image':'cristiano.jpg'
      },
      {
        'id':2,
        'name':'Lionel',
        'image':'lionel.jpg'
      },
      {
        'id':3,
        'name':'Neymar',
        'image':'neymar.jpg'
      },
      {
        'id':4,
        'name':'Ronaldinho',
        'image':'ronaldinho.jpg'
      },
      {
        'id':5,
        'name':'Zlatan',
        'image':'zlatan.jpg'
      }
    ]
  }
  render(){
    return(
      <div>
        <Navigation />
        <Switch>
            <Route exact path = '/ ' component={App}/>
            <Route exact path = '/about' component={About}  />
            <Route exact path = '/contact' component={Contact}/>
            <Route exact path = '/players' render={(props) => <Players {...props} players={this.state.players}/>}/>
            <Route exact path='/players/:id/:name/:image' render={PlayerContainer}/>
        </Switch>
      </div>
    )
  }
  
}

export default Router;