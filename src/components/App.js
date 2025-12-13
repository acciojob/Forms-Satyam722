import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";
import "../styles/App.css";

const App = () => {
  return (
    <Router>
      <div id="main" style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Forms Assignment</h1>

        <nav>
          <Link id="form-link" to="/form">Form Layout</Link> |{" "}
          <Link id="form-ref-link" to="/form-ref">Form Using useRef</Link> |{" "}
          <Link id="form-state-link" to="/form-state">Form Using useState</Link>
        </nav>

        <Switch>
          <Route path="/form" component={Form} />
          <Route path="/form-ref" component={FormRef} />
          <Route path="/form-state" component={FormState} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
