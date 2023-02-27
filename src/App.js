import React from "react";
import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import BioComponent from "./components/BioComponent";
import SkillsComponent from "./components/SkillsComponent";
import ProjectsComponent from "./components/ProjectsComponent";

function App() {
  return (
    <div>
        <HeaderComponent/>
      <Router>
        <Routes>
            <Route path={"/"} exact element={<HomeComponent/>}></Route>
            <Route path={"/bio"} element={<BioComponent/>}></Route>
            <Route path={"/skills"} element={<SkillsComponent/>}></Route>
            <Route path={"/projects"} element={<ProjectsComponent/>}></Route>
        </Routes>
      </Router>
        <FooterComponent/>
    </div>
  );
}
export default App;
