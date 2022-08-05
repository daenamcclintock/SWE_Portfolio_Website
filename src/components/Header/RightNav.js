import React, { useState } from 'react';
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
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
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

const RightNav = ({ open, setOpen }) => {

  return (
    <Ul open={open}>
        <Link href="#projects">
          <a onClick={() => setOpen(!open)}><li>{navLinks[0]}</li></a>
        </Link>
        <Link href="#tech">
        <a onClick={() => setOpen(!open)}><li>{navLinks[1]}</li></a>
        </Link>
        <Link href="#about">
        <a onClick={() => setOpen(!open)}><li>{navLinks[2]}</li></a>
        </Link>
        <Link href="#contact">
        <a onClick={() => setOpen(!open)}><li>{navLinks[3]}</li></a>
        </Link>
    </Ul>
  )
}

export default RightNav