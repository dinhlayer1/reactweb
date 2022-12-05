import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Error from "./Error";
import Footer from "./Footer";

function App() {
    return(
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/service" element={<Service />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App;