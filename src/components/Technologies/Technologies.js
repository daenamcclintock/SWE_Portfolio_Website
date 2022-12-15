import React from 'react';
import { DiReact, DiPostgresql, DiNodejsSmall, DiHtml5, DiPython, DiSass, DiBootstrap, DiMongodb, DiGithubAlt, DiHeroku } from 'react-icons/di';
import { FaAws, FaHardHat, FaEthereum } from "react-icons/fa";
import { SiPostman, SiJavascript, SiNextdotjs, SiExpress, SiDjango, SiSolidity, SiWeb3Dotjs, SiBlockchaindotcom, SiGraphql, SiTypescript } from "react-icons/si";
import { IoLogoCss3, IoLogoGithub } from "react-icons/io";
import { SiThreedotjs, SiIpfs, SiTailwindcss } from "react-icons/si";


import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, Tech, TechItem } from './TechnologiesStyles';

const Technologies = ({ open }) =>  (
  <Section id="tech" open={open}>
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <Tech>
      <TechItem>
        <SiJavascript size="5rem"/>
        JAVASCRIPT
      </TechItem>
      <TechItem>
        <DiReact size="5rem"/>
        REACT
      </TechItem>
      <TechItem>
        <DiNodejsSmall size="5rem"/>
        NODE.JS
      </TechItem>
      <TechItem>
        <SiExpress size="5rem"/>
        EXPRESS.JS
      </TechItem>
      <TechItem>
        <SiNextdotjs size="5rem"/>
        NEXT.JS
      </TechItem>
      <TechItem>
        <SiThreedotjs size="5rem"/>
        THREE.JS
      </TechItem>
      <TechItem>
        <DiHtml5 size="5rem"/>
        HTML5
      </TechItem>
      <TechItem>
        <IoLogoCss3 size="5rem"/>
        CSS3
      </TechItem>
      <TechItem>
        <DiSass size="5rem"/>
        SASS
      </TechItem>
      <TechItem>
        <DiBootstrap size="5rem"/>
        BOOTSTRAP4
      </TechItem>
      <TechItem>
        <SiTailwindcss size="5rem"/>
        TAILWINDCSS
      </TechItem>
      <TechItem>
        <DiPython size="5rem"/>
        PYTHON
      </TechItem>
      <TechItem>
        <DiMongodb size="5rem"/>
        MONGODB
      </TechItem>
      <TechItem>
        <SiPostman size="5rem"/>
        POSTMAN
      </TechItem>
      <TechItem>
        <SiDjango size="5rem"/>
        DJANGO
      </TechItem>
      <TechItem>
        <DiPostgresql size="5rem"/>
        POSTGRESQL
      </TechItem>
      <TechItem>
        <IoLogoGithub size="5rem"/>
        GITHUB
      </TechItem>
      <TechItem>
        <DiGithubAlt size="5rem"/>
        GIT
      </TechItem>
      <TechItem>
        <DiHeroku size="5rem"/>
        HEROKU
      </TechItem>
      <TechItem>
        <SiTypescript size="5rem"/>
        TYPESCRIPT
      </TechItem>
      <TechItem>
        <SiGraphql size="5rem"/>
        GRAPHQL
      </TechItem>
      <TechItem>
        <SiSolidity size="5rem"/>
          SOLIDITY
      </TechItem>
      <TechItem>
        <SiBlockchaindotcom size="5rem"/>
        BLOCKCHAIN
      </TechItem>
      <TechItem>
        <SiWeb3Dotjs size="5rem"/>
        WEB3.JS
      </TechItem>
      <TechItem>
        <FaEthereum size="5rem"/>
        ETHERS.JS
      </TechItem>
      <TechItem>
        <FaHardHat size="5rem"/>
        HARDHAT
      </TechItem>
      <TechItem>
        <SiIpfs size="5rem"/>
        IPFS
      </TechItem>
    </Tech>
    <List>
      <ListItem>
        <ListContainer data-aos='fade-right' data-aos-duration='1000'>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js, Next.js, <br />
            Node.js, and Express.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer data-aos='fade-down' data-aos-duration='1000'>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            MongoDB and <br />
            PostgreSQL Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer data-aos='fade-up'>
          <ListTitle>Management & Deployment</ListTitle>
          <ListParagraph>
            Experience with <br />
            Git, Github, Heroku, <br />
            Netlify, and Postman
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem data-aos='fade-left' data-aos-duration='1000'>
        <ListContainer>
          <ListTitle>Web 3.0</ListTitle>
          <ListParagraph>
            Experience with <br />
            Solidity, Hardhat, Ethers.js, Web3.js <br />
            Ganache, and IPFS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
