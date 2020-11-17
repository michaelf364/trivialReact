import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Start from "./pages/Start";
function App() {
  return (
    <Router>
      <div class="row">
      <Route exact path="/" component={Start} />
      </div>
    </Router>
  );
}

export default App;
