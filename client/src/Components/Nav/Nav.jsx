import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/countries'}>Countries</NavLink>
                </li>
                <li>
                    <NavLink to={'/activities'}>Activities</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export { Nav }