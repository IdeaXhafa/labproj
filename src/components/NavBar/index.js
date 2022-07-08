import React, { useReducer } from 'react';
import {FaBars} from 'react-icons/fa';
import './style.css';
import {Nav, NavBarContainer, 
        NavLogo, MobileIcon, 
        NavMenu, NavItem, 
        NavLinks, NavBtn, NavBtnLink} from './NavBarElements';

import {Drejtimet} from '../Drejtimet/Drejtimet';
import { NavDropdown, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
//import { Logout } from '../auth/LogOut/Logout'
import Signup from '../auth/Signup/Signup';
import { getSuggestedQuery } from '@testing-library/react';

const NavBar = ({toggle}) => {

  function getUser(){
  let user = JSON.parse(localStorage.getItem('signup'))
  console.warn(user);
  }

  return (
    <>
      <Nav>
        <NavBarContainer >
          <NavLogo to='/'>
            YourGuide
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            {/* <NavItem>
              <NavLinks to="App">About Us</NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks to="states">States</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="cities">Cities</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="fk">Universities</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="drejtimet">
                <div class="dropdown">
                    <span>Career Resources</span>
                    <div>
                      <div class="dropdown-content">
                        <div class="content">
                          <Drejtimet/>
                        </div>
                      </div>
                    </div>
                </div>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="PunaDhePraktika">Jobs & Payment</NavLinks>
            </NavItem>
          </NavMenu>
          <NavLink>
                    <Link to="signup" style={{color:'white'}}>
                    <h5>Sign up</h5>
                    </Link>
          </NavLink>
          <NavLink>
                    <Link to="login" style={{color:'white'}}>
                    <h5>Log in</h5>
                    </Link>
          </NavLink>
          {/* <NavDropdown title={getUser} >
            <NavDropdown.Item>Log Out</NavDropdown.Item>
          </NavDropdown> */}
          <NavLink>
                    <Link to="logout" style={{color:'white'}}>
                    <h5>Log out</h5>
                    </Link>
          </NavLink>
        </NavBarContainer>
      </Nav>
    </>
  );
}

export default NavBar;