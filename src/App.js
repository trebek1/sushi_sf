//@flow

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Wrapper from "./components/Wrapper";
const Links = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/">
      Home
    </NavLink>
    <NavLink exact activeStyle={{ color: "green" }} to="/about">
      About
    </NavLink>
  </nav>
);
const App = () => (
  <Router>
    <Wrapper>
      <Links />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      {/* <Route path="/about/render" render={() => <div> hi </div>} /> */}
      <Route
        path="/about/render"
        children={({ match }) => match && <div> hi match </div>}
      />
    </Wrapper>
  </Router>
);
export default App;
