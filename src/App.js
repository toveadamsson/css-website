import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import './css/categories.css'
import './css/subscribe.css'

//?----------- 
import FrontPage from "./components/front-page.js"
import Catalog from "./components/catalog.js"
import Header from "./components/header"

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Header /> */}
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
