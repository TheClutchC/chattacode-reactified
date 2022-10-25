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
// import { NavLink } from "react-router-dom";

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar color="dark" sticky="top" expand="md" dark>
                <NavbarBrand href="/" className="me-auto">
                    <h1>chattaCode initiaTive</h1>
                    <h5 className="text-info">open to anyone. built for everyone.</h5>
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="me-2" />
                <Collapse isOpen={!collapsed} navbar className="justify-content-end">
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about/">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/events/">
                                Events
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/connect/">
                                Connect
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/blog/">
                                Blog
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/projects/">
                                Projects
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;