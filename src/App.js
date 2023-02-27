import React from "react";
import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import FooterComponent from "./components/FooterComponent";
import ProjectsComponent from "./components/ProjectsComponent";

function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path={"/"} exact element={<HomeComponent/>}></Route>
            <Route path={"/projects"} element={<ProjectsComponent/>}></Route>
        </Routes>
      </Router>
        <FooterComponent/>
    </div>
  );
}
export default App;
