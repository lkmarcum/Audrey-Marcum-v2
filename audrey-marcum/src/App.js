import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Homepage />
    </div>
  );
}

export default App;
