import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//*-------------------------------------- 
import './App.css';
//*-------------------------------------- 
import Intro from "./components/Intro.js"
import Catalogue from "./components/Catalogue.js"
//*-------------------------------------- 
function App() {
  return (
    <Router>
    <div className="App">
      <Intro />
      <Switch>
        <Route exact path="/">
      <Catalogue />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}
export default App;
