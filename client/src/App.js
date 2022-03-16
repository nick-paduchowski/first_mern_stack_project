import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Auth from './components/Auth/auth'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth" exact element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
