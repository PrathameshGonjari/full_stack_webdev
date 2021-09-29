import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import AppBody from './components/AppBody';
import { Route, Switch } from 'react-router-dom'
import Contact from './components/Contact';
import About from './components/About';
import Photos from './components/Photos';
import App from './App';
export default function Router() {

  return (
    <switch>
      <Route path="/" component={App}/>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/photos" component={Photos}/>
    </switch>
  );
}

