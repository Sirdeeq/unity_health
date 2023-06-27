import React from "react";
import Routes from "./components/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import SignupLogin from "./pages/SignupLogin";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
