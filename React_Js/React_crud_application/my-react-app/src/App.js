import './App.css';
import UserList from './Components/UsersList';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import CreateUser from './Components/CreateUser';
import EditUser from './Components/EditUser';

function App() {
  return (
    <Router>
      <Switch className="App">     
      <Route exact path="/" component={UserList}/>
      <Route exact path="/createuser" component={CreateUser}/>
      <Route exact path="/edituser/:id/:name" component={EditUser}/>
    </Switch>
    </Router>
    
  );
}

export default App;
