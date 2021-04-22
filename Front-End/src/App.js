import React from "react";
import CrudApi from "./components/CrudApi";
import logo from "./logo.png";
import "./App.css";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <SongSearch />
      <CrudApi />
    </div>
  );
}

export default App;
