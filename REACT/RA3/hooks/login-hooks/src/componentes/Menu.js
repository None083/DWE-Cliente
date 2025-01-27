import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';

export default function Menu({ menuItem, changeMenu }) {
  const menuItems = ['UNO', 'DOS', 'TRES'];

  return (
    <Navbar color="light" light expand="md" className="shadow">
      <NavbarBrand href="/" className="fw-bold">
        MYFPSCHOOL
      </NavbarBrand>
      <Nav className="me-auto" navbar>
        {menuItems.map((item) => (
          <NavItem key={item} className="me-2">
            <Button
              color={menuItem === item ? 'primary' : 'secondary'}
              onClick={() => changeMenu(item)}
            >
              {item}
            </Button>
          </NavItem>
        ))}
      </Nav>
    </Navbar>
  );
}
