import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaDiscord } from "react-icons/fa";
import { MdEmail, MdPhoneIphone } from "react-icons/md";



import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = ({ open }) => {
  return (
    <FooterWrapper open={open}>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Cell <MdPhoneIphone /></LinkTitle>
          <LinkItem href="tel:781-733-3076">781-733-3076</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email <MdEmail /></LinkTitle>
          <LinkItem href="mailto:daena.c.mcclintock@gmail.com">
            daena.c.mcclintock@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>This website was designed and developed by Daena McClintock</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/daenamcclintock">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/daenamcclintock/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="discordapp.com/users/dcm13#3056">
            <FaDiscord size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
