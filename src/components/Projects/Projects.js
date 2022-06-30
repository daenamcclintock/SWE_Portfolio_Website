import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project, index) => {
        return (
          <BlogCard key={index}>
          <Img src={project.image} />
            <TitleContent>
              <HeaderThree title>{project.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{project.description}</CardInfo>
            <div>
              <br />
              <TitleContent><b>Tech Stack</b></TitleContent>
              <TagList>
                {project.tags.map((tag, index) => {
                  return <Tag key={index}>{tag}</Tag>;
                })}
              </TagList>
            </div>
            {project.backendCode ? 
              <UtilityList>
                <ExternalLinks href={project.backendCode} target="_blank">Backend Code</ExternalLinks>
                <ExternalLinks href={project.frontendCode} target="_blank">Frontend Code</ExternalLinks>
                <ExternalLinks href={project.source} target="_blank">Website</ExternalLinks>
              </UtilityList> 
            : 
              <UtilityList>
                <ExternalLinks href={project.visit} target="_blank">Code</ExternalLinks>
                <ExternalLinks href={project.source} target="_blank">Website</ExternalLinks>
              </UtilityList>
            }
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;