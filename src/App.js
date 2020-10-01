import React from "react";
import "./App.css";
import Navbar from "./components/navbar"
import Contact from "./pages/contact";
import About from "./pages/about";
import Projects from "./pages/projects";
import SignUp from "./pages/sign-up";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar />
            <Switch>
                <Route path="/contact" exact component={Contact} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/sign-up" component={SignUp} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
