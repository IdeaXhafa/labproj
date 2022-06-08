import React from 'react';
import {FaBars} from 'react-icons/fa';

import {Nav, NavBarContainer, 
        NavLogo, MobileIcon, 
        NavMenu, NavItem, 
        NavLinks, NavBtn, NavBtnLink} from './NavBarElements';

const NavBar = ({toggle}) => {
  return (
    <>
      <Nav >
        <NavBarContainer >
          <NavLogo to='/'>
            YourGuide
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="aboutus">About Us</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="states">States</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="cities">Cities</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavLinks to="/login">Log In</NavLinks>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
}

export default NavBar;