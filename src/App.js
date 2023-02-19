import React from "react";
import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
        <HeaderComponent/>
      <Router>
        <Routes>
            <Route path={"/"} exact element={<HomeComponent/>}></Route>
        </Routes>
      </Router>
        <FooterComponent/>
    </div>
  );
}
export default App;
