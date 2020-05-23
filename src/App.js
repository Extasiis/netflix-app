import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import SignIn from './components/SignIn'
import SignUp from './components/SingUp'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
