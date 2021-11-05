import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

//?----------- 
import FrontPage from "./components/FrontPage.js"
import Catalog from "./components/Catalog.js"

function App() {
  return (
    <Router>
    <div className="App">
      <FrontPage />
      <Switch>
        <Route exact path="/">
      <Catalog />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}
export default App;
