import React, { useEffect, useRef } from "react";
import { Card } from 'react-bootstrap'
import { init } from "ityped";
import Link from 'next/link';
import Modal from 'react-modal';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection, Image, BackgroundImage, MeSection, MeText, Container } from './MeStyles';
import { MdFileDownload } from "react-icons/md";

// import Three from "../ThreeJS/Three";

const Me = (props) => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Fullstack Engineer", "Blockchain Developer", "Freelance Developer"],
    });
  }, []);
 

  return (
    <>
      <MeSection row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Daena McClintock
          </SectionTitle>
          <Container>
            <MeText>
              <h3>
                I am a <span style={{color: 'rgba(255, 255, 255, 0.95)'}} ref={textRef}></span>
              </h3>
            </MeText>
          </Container>
          <Container>
            <Link href={'https://github.com/daenamcclintock/resume/raw/main/Daena%20McClintock%20-%20SWE%20Resume.pdf'}>
              <Button>Resume</Button>
            </Link>
            <Link href={'https://github.com/daenamcclintock/resume/raw/main/Daena%20McClintock%20-%20SWE%20Resume.pdf'}>
              <a target="_blank">
                <Button><MdFileDownload /></Button>
              </a>
            </Link>
          </Container>
        </LeftSection>
      </MeSection>
    </>
  )
};

export default Me;