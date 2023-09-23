import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute.js';
import Home from './pages/Home';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/signin">SignIn</PublicRoute>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
