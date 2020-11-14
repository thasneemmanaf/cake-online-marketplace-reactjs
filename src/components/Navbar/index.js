import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './style';

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavLink to="/">Cakey</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
}

export default Navbar;
