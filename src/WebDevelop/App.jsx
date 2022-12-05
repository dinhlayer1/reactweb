import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu";
import Search from "./Search";
import User from "./User";

function App() {
    const Name = () => {
        return <h1>hello name</h1>
    }
    return (
        <>
            <Menu />
            <Routes>
                <Route exact path="/" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/search" element={<Search />} />
                <Route exact path="/user/" element={<User />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    )
}

export default App;