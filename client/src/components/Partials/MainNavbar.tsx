import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem
} from 'reactstrap';

const MainNavbar = () => {
    const location = useLocation();

    return (
        <div className="navbar-desktop">
            <Navbar className="py-3" id="navbarMain" color="dark" dark>
                <Link to="/" className="text-light nav-links">
                    TicTacToe
                </Link>
                <Nav className="main-navigation">
                    <NavItem className="px-3">
                        <Link
                            className={(location.pathname != "/") ? "text-light nav-links" : "text-light nav-links active"}
                            to="/"
                        >
                            Home
                        </Link>
                    </NavItem>
                    <NavItem className="px-3">
                        <Link
                            className={(location.pathname != "/logs") ? "text-light nav-links" : "text-light nav-links active"}
                            to="/logs"
                        >
                            Logs
                        </Link>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default MainNavbar;