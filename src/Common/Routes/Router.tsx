import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import Debug from "../Debug/Debug";

import ECAM_SD from "../Displays/ECAM_SD";

import Overhead from "../Panels/Overhead";
import ELEC from "../Panels/Overhead/ELEC";

const Router = () => (
  <Routes>
    <Route index element={<Home/>}/>
    <Route path="debug" element={<Debug/>}/>
    <Route path="ecam-elec" element={<ECAM_SD.ELEC/>}/>

    <Route path="overhead" element={<Overhead/>}>
      <Route path="elec" element={<ELEC/>}/>
    </Route>
  </Routes>
);

export default Router;