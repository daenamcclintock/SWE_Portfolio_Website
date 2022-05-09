import React, { useEffect, useRef } from "react";
import { Card } from 'react-bootstrap'
import { init } from "ityped";
import Link from 'next/link';
import Modal from 'react-modal';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection, Image } from './MeStyles';
// import myPDF from '../../../resume/Daena McClintock - SWE Resume.pdf'

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
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Daena McClintock
          </SectionTitle>
          <SectionText>
            <h3>
              I am a <span style={{color: 'rgba(255, 255, 255, 0.75)'}} ref={textRef}></span>
            </h3>
          </SectionText>
          <div>
            <Link href={'https://github.com/daenamcclintock/resume/raw/main/Daena%20McClintock%20-%20SWE%20Resume.pdf'}>
              <a target="_blank">
                  <Button>Resume</Button>
              </a>
            </Link>
          </div>
        </LeftSection>
        <RightSection>
        <Card className="container m-2">
            <Card.Body>
              <div className="container">
                <Image src={'https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/36742202_1801106396649810_5733688723485229056_n.jpg?_nc_cat=106&ccb=1-6&_nc_sid=174925&_nc_ohc=W8KvDrVgbycAX9ef_h7&_nc_ht=scontent-lax3-2.xx&oh=00_AT8eh8RJXN5SyQ960b1b1PFMRMez-B3Se5dJHFwVFCABsg&oe=629D3742'}/>              
              </div>
            </Card.Body>
        </Card>
        </RightSection>
      </Section>
    </>
  )
};

export default Me;