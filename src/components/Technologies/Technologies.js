import React from 'react';
import { DiReact, DiPostgresql, DiNodejsSmall, DiHtml5, DiPython, DiSass, DiBootstrap, DiMongodb, DiGithubAlt, DiHeroku } from 'react-icons/di';
import { FaAws, FaHardHat } from "react-icons/fa";
import { SiPostman, SiJavascript, SiNextdotjs, SiExpress, SiMongodb, SiDjango, SiHeroku, SiSolidity, SiWeb3Dotjs, SiBlockchaindotcom, SiHiveBlockchain } from "react-icons/si";
import { IoLogoCss3, IoLogoGithub } from "react-icons/io";
import { SiThreedotjs } from "react-icons/si";


import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, Tech, TechItem, TechStyle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
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
        <FaHardHat size="5rem"/>
        HARDHAT
      </TechItem>
    </Tech>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js, Next.js, <br />
            Node.js, and Express.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            MongoDB and <br />
            PostgreSQL Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Management & Deployment</ListTitle>
          <ListParagraph>
            Experience with <br />
            Git, Github, Heroku, <br />
            Netlify, and Postman
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Web3</ListTitle>
          <ListParagraph>
            Experience with <br />
            Solidity, Hardhat, Ganache, <br />
            and Web3.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
