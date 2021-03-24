import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import { signIn, signOut, useSession } from "next-auth/client";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [session, loading] = useSession();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Focus Feed</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">View Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Settings
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        {session ? (
          <NavbarText>
            Hello, {session.user.email ?? session.user.name} <br />
            <button onClick={() => signOut()}>Sign out</button>
          </NavbarText>
        ) : (
          <NavbarText>Signed out.</NavbarText>
        )}
      </Navbar>
    </div>
  );
};

export default Navigation;
