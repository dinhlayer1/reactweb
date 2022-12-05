import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Menu() {
    return(
        <>
            <nav className="navbar">
                <NavLink
                    className={({isActive}) => (isActive ? 'active__class' : null)}
                    to='/'>
                    About Us 
                </NavLink>
                <NavLink
                    className={({isActive}) => (isActive ? 'active__class' : null)}
                    to='/contact'>
                    Contact
                </NavLink>
                <NavLink
                    className={({isActive}) => (isActive ? 'active__class' : null)}
                    to='/user'>
                    User
                </NavLink>

                <NavLink
                    className={({isActive}) => (isActive ? 'active__class' : null)}
                    to='/search'>
                    Search
                </NavLink>
            </nav>
        </>
    )
}

export default Menu;