import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaDiscord } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import MobileNavbar from './MobileNavbar';
import { MobileContainer, Container, Div1, Div2, Div3, NavLink, SocialIcons } from './ArticlesHeaderStyles';

const ArticlesHeader = ({ open, setOpen }) => {

  const navLinks = ["All", "Recent", "Blockchains", "DeFi"]

  return (
      <>
      <Container>
        <Div1>
          <Link href="/">
            <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
              <BiWorld size="3rem" /> &nbsp; <span><MdLocationOn /> Boston, MA</span>
            </a>
          </Link>
        </Div1>
        <Div2>
          <li>
            <Link href="#all">
              <NavLink>{navLinks[0]}</NavLink>
            </Link>
          </li>
          <li>
            <Link href="#recent">
              <NavLink>{navLinks[1]}</NavLink>
            </Link>
          </li>        
          <li>
            <Link href="#blockchains">
              <NavLink>{navLinks[2]}</NavLink>
            </Link>
          </li>
          <li>
            <Link href="#defi">
              <NavLink>{navLinks[3]}</NavLink>
            </Link>
          </li>        
        </Div2>
          <Div3>
            <SocialIcons href="https://github.com/daenamcclintock">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/daenamcclintock/">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.discordapp.com/users/dcm13#3056">
              <FaDiscord size="3rem"/>
            </SocialIcons>
          </Div3>
        </Container>
        <MobileContainer>
            <Div1 open={open}>
              <Link href="/">
                <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
                  <BiWorld size="3rem" /> &nbsp; <span><MdLocationOn /> Boston</span>
                </a>
              </Link>
            </Div1>
            <Div3>
              <SocialIcons href="https://github.com/daenamcclintock">
                <AiFillGithub size="3rem" />
              </SocialIcons>
              <SocialIcons href="https://www.linkedin.com/in/daenamcclintock/">
                <AiFillLinkedin size="3rem" />
              </SocialIcons>
              <SocialIcons href="https://www.discordapp.com/users/dcm13#3056">
                <FaDiscord size="3rem"/>
              </SocialIcons>
              <MobileNavbar open={open} setOpen={setOpen}/>
            </Div3>
        </MobileContainer>
      </>
  );
}



export default ArticlesHeader;