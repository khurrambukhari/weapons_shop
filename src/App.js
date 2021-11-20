import logo from './logo.svg';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle"


import {BrowserRouter as Router, Route, Switch,Link, Redirect} from 'react-router-dom'
import Weaons_info from './components/Weapons_info';
import Contact from './components/Contact';
import About from './components/About';
import Service from './components/Service';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      

    <div className="App">
  <Navbar/>
  <Switch>
    <Route path="/" exact component={Weaons_info}/>
    <Route path="/contact" exact component={Contact}/>
    <Route path="/about" exact component={About}/>
    <Route path="/service" exact component={Service}/>
    <Redirect to="/"/>

  </Switch>
  <Footer/>
    </div>
    </Router>
  );
}

export default App;
