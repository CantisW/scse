import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
import './index.css';

import Login from "components/Login";

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/login" component={Login}/>
    </Router>
  );
};

export default App;
