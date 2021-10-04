import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import About from './Components/Aboutus/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';
import Service from './Components/Services/Service';
import Statics from './Components/Statics/Statics';

function App() {
  return (
    <Router>
      {/* common for all */}
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/services">
          <Service></Service>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/statics">
          <Statics></Statics>
        </Route>
        <Route path="*">
          {/* Not found route */}
          <Notfound></Notfound>
        </Route>
      </Switch>
      {/* common for all */}
      <Footer></Footer>
    </Router>
  );
}

export default App;
