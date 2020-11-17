import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Start from "./pages/Start";
import HighScores from "./pages/ScoreScn";
function App() {
  return (
    <Router>
      <div class="row">
      <Route exact path="/" component={Start} />
      <Route exact path="/highscores" component={HighScores} />
      </div>
    </Router>
  );
}

export default App;
