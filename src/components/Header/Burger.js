import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';
import Me from '../Me/Me';


const StyledBurger = styled.div`
width: 2rem;
height: 2rem;
position: fixed;
top: 15px;
right: 20px;
z-index: 20;
display: none;
@media (max-width: 768px) {
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
}
div {
  width: 2rem;
  height: 0.25rem;
  background-color: ${({ openBurgerNav }) => openBurgerNav ? '#ccc' : '#ccc'};
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;
  &:nth-child(1) {
    transform: ${({ openBurgerNav }) => openBurgerNav ? 'rotate(45deg)' : 'rotate(0)'};
  }
  &:nth-child(2) {
    transform: ${({ openBurgerNav }) => openBurgerNav ? 'translateX(100%)' : 'translateX(0)'};
    opacity: ${({ openBurgerNav }) => openBurgerNav ? 0 : 1};
  }
  &:nth-child(3) {
    transform: ${({ openBurgerNav }) => openBurgerNav ? 'rotate(-45deg)' : 'rotate(0)'};
  }
}
`;
  const Burger = ({ open, setOpen }) => {
  const [openBurgerNav, setOpenedBurgerNav] = useState(false)

  const openTheBurgerNav = () => {
    setOpenedBurgerNav(!openBurgerNav)
    setOpen(!openBurgerNav)
  }

  return (
    <>
      <StyledBurger openBurgerNav={openBurgerNav} onClick={() => openTheBurgerNav()}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav openBurgerNav={openBurgerNav}/>
    </>
  )
}

export default Burger