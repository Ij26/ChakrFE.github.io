import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from ".src/pages/index";
import SettingsPage from ".src/pages/settings";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/settings" component={SettingsPage} />
        {/* Add more routes here */}
      </Switch>
    </Router>
  );
};

export default App;
