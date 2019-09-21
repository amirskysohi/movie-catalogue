import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Index() {
  return <h2 className="index">Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
    <Router>
      <div className="app">
        <h1 className="app__title">Hello there</h1>
      </div>
      <Route path="/about/" exact component={About} />
      <Route path="/" exact component={Index} />
    </Router>
  );
}

export default App;
