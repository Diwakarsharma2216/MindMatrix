
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
    const location=useLocation()
    const bg = location.pathname === '/' ? 'bg-gradient-to-r from-blue-400 to-purple-500' : 'bg-gradient-to-r from-teal-400 to-blue-500';
    return (
        <nav className={`flex justify-between items-center p-4 border-b-2 border-white ${bg}`}>
            <Link to="/" ><h1 className="text-2xl font-bold">MindMatrix</h1></Link>
            <div>
                <Link to="/login" className="mr-4">Login</Link>
                <Link to="/signup" className="mr-4">Signup</Link>
            </div>
        </nav>
    );
};
