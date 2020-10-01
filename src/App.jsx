import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import PlayerDetailPage from "./routes/PlayerDetailPage";
import { PlayersContextProvider } from './context/PlayersContext';

export default function App() {
  return (
    <PlayersContextProvider>
    <div className="container">
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/players/:id/update"
          component={UpdatePage}
        />
        <Route
          exact
          path="/players/:id"
          component={PlayerDetailPage}
        />
      </Switch>
    </Router>
  </div>
    </PlayersContextProvider>
  );
}
