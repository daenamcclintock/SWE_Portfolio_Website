import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`

const MobileNavbar = ({ open, setOpen }) => {
  return (
    <Nav >
      <Burger open={open} setOpen={setOpen}/>
    </Nav>
  )
}

export default MobileNavbar