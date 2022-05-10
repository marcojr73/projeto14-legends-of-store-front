import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "../assets/styles/reset.css"
import "../assets/styles/style.css"

import SigIn from "./SigIn";
import Home from "./Home";
import Finish from "./Finish";
import SignUp from "./SignUp";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUp />} > </Route>
                <Route path="/sig-in" element={<SigIn />} > </Route>
                <Route path="/home" element={<Home />} > </Route>
                <Route path="/Finish" element={<Finish />} > </Route>
            </Routes>
        </BrowserRouter>
    )
}