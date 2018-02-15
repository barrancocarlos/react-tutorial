import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <NavLink exact to="/"><p class="nav-link">Home</p></NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/about"><p class="nav-link">About</p></NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <main role="main" class="container">
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </main>
      </div>
      </HashRouter>
    );
  }
}

export default App;
