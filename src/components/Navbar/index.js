import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './style';

function Navbar() {
  return (
    <>
      <Nav>
        <NavLink to="/">Cake</NavLink>
        <NavIcon>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
}

export default Navbar;
