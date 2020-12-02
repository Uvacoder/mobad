import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">home</Link>
            <Link to="/music">music</Link>
            <Link to="/events">events</Link>
            <Link to="/about">about</Link>
            <Link to="/contact">contact</Link>
        </div>
    );
};
export default Navbar;
