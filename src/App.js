import React from "react";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import './App.css';

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";


function App() {
  return (
    <Container fluid textAlign="center">
      <Header/>
      <Hero />
      <Footer />
    </Container>
  );
}

export default App;
