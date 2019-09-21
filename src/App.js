import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello there</h1>
      </div>
      <Route path="/" exact component={Index} />
      <Route path="/about/" exact component={About} />
    </Router>
  );
}

export default App;
