import React, { useState } from "react";
import { 
        Navbar,
        NavbarBrand,
        Collapse,
        NavbarToggler,
        Nav,
        NavItem,
        NavLink
 } from "reactstrap";
 import { Link } from "react-router-dom";

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar color="dark" sticky="top" expand="md" dark>
                <NavbarBrand className="me-3">
                    <NavLink>
                        <Link to="/">
                            <h1>chattaCode initiaTive</h1>
                            <h5 className="text-info col-4">open to anyone. built for everyone.</h5>
                        </Link>
                    </NavLink>
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="me-3" />
                <Collapse isOpen={!collapsed} navbar className="justify-content-end">
                    <Nav navbar>
                        <NavItem>
                            <NavLink>
                                <Link to="/">
                                    Home
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/about">
                                    About
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/events">
                                    Events
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/connect">
                                    Connect
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/blog">
                                    Blog
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/projects">
                                    Projects
                                </Link>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;