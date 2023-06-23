import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <Link to="/"><button>Home</button></Link>
            <Link to="/login"><button>login</button></Link>
            <Link to="/signup"><button>Sign Up</button></Link>
        </div>
    )
}
