import React from "react";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import './App.css';

import { AuthProvider } from "./context/auth";


import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Container fluid textAlign="center">
          <Header/>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Footer />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
