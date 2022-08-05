import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const navLinks = ["Projects", "Technologies", "About", "Contact"]

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ openBurgerNav }) => openBurgerNav ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ openBurgerNav }) => {
  return (
    <Ul openBurgerNav={openBurgerNav}>
        <Link href="#projects">
        <li>{navLinks[0]}</li>
        </Link>
        <Link href="#tech">
        <li>{navLinks[1]}</li>
        </Link>
        <Link href="#about">
        <li>{navLinks[2]}</li>
        </Link>
        <Link href="#contact">
        <li>{navLinks[3]}</li>
        </Link>
    </Ul>
  )
}

export default RightNav