import React from 'react';
import { DiReact, DiPostgresql, DiHeroku } from 'react-icons/di';
import { FaAws } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, Tech, TechItem } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <Tech>
      <TechItem>
        <img src="https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png" />
        React.js
      </TechItem>
      <TechItem>
        <DiReact />
        Javascript
      </TechItem>
    </Tech>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
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
        <picture>
          <DiPostgresql size="3rem" />
        </picture>
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
        <picture>
          <SiPostman size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Management & Deployment</ListTitle>
          <ListParagraph>
            Experience with <br />
            Git, Github, Heroku, <br />
            and Postman
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
