import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import { Nav, LogoContainer, Text, Icon,  Hamburger, Pages, LinkStyle, LinkText } from './styles/navbar'

function Navbar() {

  const [ isSmall, setIsSmall ] = useState(true)
  const [ isOpen, setIsOpen ] = useState(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
  }
  useEffect(() => showButton(), [])

  window.addEventListener('resize', showButton)

  return (
    <Nav>
      <LogoContainer>
        <Text>
        <Link
          style={{ textDecoration: "none", color: 'white'}}
          to='/'>
          Spooky!
          </Link>
        </Text>
        <Icon
          show={true}
        >
          <Link 
            style={{ textDecoration: "none", color: 'white'}}
          to='/'>
            <i  className="fas fa-hand-spock "></i>
            </Link>
        </Icon>
      </LogoContainer>

      <Hamburger 
        style={{ textDecoration: "none", color: 'white'}}
        show={isSmall} onClick={ () => {
        console.log(isOpen) 
        setIsOpen(!isOpen)}}>
        <i className="fas fa-bars"  />
      </Hamburger>

      <Pages
        isOpen={isOpen}
        isSmall={isSmall}
      >
        
        <Link style={LinkStyle}>
          <LinkText>
            <Link 
              style={{ textDecoration: "none", color: 'white'}}

              to='/home'>
              Home
            </Link>
          </LinkText>
        </Link>
      
        <Link style={LinkStyle} >
          <LinkText>Services</LinkText>
        </Link>

        <Link style={LinkStyle}>
          <LinkText>Products</LinkText>
        </Link>
      </Pages>
    </Nav>
  );
}

export default Navbar;