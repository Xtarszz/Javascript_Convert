import './App.css';
import Landingpage from './Landingpage';
import Login from './Login';
import Register from './Register';
import Afterlogin from './Afterlogin';
import Profile from './Profile';
import Detailbook from './Detailbook';
import Incrementdetailbook from './Incrementdetailbook';
import Incrementafterlogin from './Afterlogincart+1';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Landingpage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/afterlogin">
            <Afterlogin />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/detailbook">
            <Detailbook />
          </Route>
          <Route exact path="/incrementdetailbook">
            <Incrementdetailbook />
          </Route>
          <Route exact path="/incrementafterlogin">
            <Incrementafterlogin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
