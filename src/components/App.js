import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./UserContext";

import "../assets/styles/reset.css"
import "../assets/styles/style.css"

import SignIn from "./SignIn";
import Home from "./Home";
import Finish from "./Finish";
import SignUp from "./SignUp";

export default function App() {
    const [selected, setSelected] = useState({});
    const [ bag, setBag ] = useState([])
    const [ email, setEmail ] = useState("")

    return (
        <UserContext.Provider value={{selected, setSelected, bag, setBag, email, setEmail}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} > </Route>
                    <Route path="/sign-up" element={<SignUp />} > </Route>
                    <Route path="/home" element={<Home />} > </Route>
                    <Route path="/Finish" element={<Finish />} > </Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}