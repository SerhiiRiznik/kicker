import { Container } from "@mui/material";
import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import Games from "./Components/Games/Games";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Teams from "./Components/Teams/Teams";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/games" element={<Games />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </React.Fragment>
  );
}

export default App;
