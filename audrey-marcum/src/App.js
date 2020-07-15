import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Homepage from "./components/Homepage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Homepage />
    </div>
  );
}

export default App;
