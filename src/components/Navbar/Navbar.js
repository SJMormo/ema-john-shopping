import React from 'react';
import logo from '../../images/Logo.svg';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg px-5 mormo-navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Order</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Order Review</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Manage Inventory</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;