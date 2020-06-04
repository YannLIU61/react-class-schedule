import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginComp from "./components/LoginComp";
import HomePageComp from './components/HomePageComp'

function App() {

  return (<Router>
    <Switch>
      <Route exact path='/' component={LoginComp} />
      <Route path="/sign-in" component={LoginComp} />
      <Route path="/home" component={HomePageComp} />
    </Switch>
  </Router>
  );
}

export default App;