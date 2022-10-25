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
 import { NavLink as RRNavLink } from "react-router-dom";

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar color="dark" sticky="top" expand="md" dark>
                <NavbarBrand className="me-auto">
                    <RRNavLink to="/">
                        <h1>chattaCode initiaTive</h1>
                        <h5 className="text-info">open to anyone. built for everyone.</h5>
                    </RRNavLink>
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="me-2" />
                <Collapse isOpen={!collapsed} navbar className="justify-content-end">
                    <Nav navbar>
                        <NavItem>
                            <NavLink>
                                <RRNavLink to="/">
                                    Home
                                </RRNavLink>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <RRNavLink to="/about">
                                    About
                                </RRNavLink>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <RRNavLink to="/events">
                                    Events
                                </RRNavLink>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <RRNavLink to="/connect">
                                    Connect
                                </RRNavLink>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <RRNavLink to="/blog">
                                    Blog
                                </RRNavLink>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <RRNavLink to="/projects">
                                    Projects
                                </RRNavLink>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;