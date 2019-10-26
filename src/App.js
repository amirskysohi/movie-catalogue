import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../src/components/molecules/NavBar/NavBar";
import Homepage from "./components/pages/Homepage/Homepage";

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/about/" exact component={About} />
        <Route path="/" exact component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
