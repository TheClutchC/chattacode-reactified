import React, { useState } from "react";
import { 
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem
 } from "reactstrap";
 import { NavLink } from "react-router-dom";

const NavBar = (args) => {
   const [isOpen, setIsOpen] = useState(false);
   const toggle = () => setIsOpen(!isOpen);

   return (
		<div>
			<Navbar {...args} expand="md" color="dark" dark>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav navbar className="rounded nav-pills col" justified>
						<NavItem>
							<NavLink to="/" className="nav-link" end>
								Home
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/about" className="nav-link">
								About
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/events" className="nav-link">
								Events
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/connect" className="nav-link">
								Connect
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/blog" className="nav-link">
								Blog
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/projects" className="nav-link">
								Projects
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
  	);
}

export default NavBar;