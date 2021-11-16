import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark ">
            <div className="container-fluid">
                <Link to='/'> Home</Link>
                <Link to='/cars'> Cars</Link>
                <Link to='/add'>Add Car</Link>
            </div>
        </nav>
    )
}
