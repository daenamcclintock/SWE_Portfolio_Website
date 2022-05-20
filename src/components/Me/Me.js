import React, { useEffect, useRef, Suspense } from "react";
import { Card } from 'react-bootstrap'
import { init } from "ityped";
import Link from 'next/link';
import Modal from 'react-modal';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection, Image, BackgroundImage, MeSection, MeText, Container, DownloadButton, ResumeButton } from './MeStyles';
import { MdFileDownload } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";
import { Canvas } from '@react-three/fiber'
import Three from "../ThreeJS/Three";
import Earth from "../Earth/Earth";


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
          <Container style={{marginTop: '10rem', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
            <Link href={'https://github.com/daenamcclintock/resume/blob/main/Daena%20McClintock%20-%20SWE%20Resume.pdf'}>
              <Button>Resume &nbsp;</Button>
            </Link> &nbsp;
                <Link href={'https://github.com/daenamcclintock/resume/raw/main/Daena%20McClintock%20-%20SWE%20Resume.pdf'}>
                    <DownloadButton><MdFileDownload size={'1.7rem'}/></DownloadButton>
                </Link>
          </Container>
        </LeftSection>
        <div>
            <Canvas>
              <ambientLight color={0xffffff} intensity={0.5} />
              <pointLight color={0xff4422} intensity={1} position={[-1, -1, 3]} />
              <pointLight color={0x44ff88} intensity={1} position={[1, 2, 3]} />
              <pointLight color={0xdd3311} intensity={1} position={[0, 3, 2]} />
              <Suspense>
                <Three />
              </Suspense>
            </Canvas>
            {/* <Canvas
              camera={{ position: [0, 0, 10], fov: 40, far: 10000 }}
              onCreated={({ gl }) => {
                gl.gammaInput = true
                gl.toneMapping = THREE.ACESFilmicToneMapping
              }}>
              <pointLight intensity={0.1} position={[10, 10, 10]} />
              <rectAreaLight intensity={3} position={[0, 10, -10]} width={30} height={30} onUpdate={(self) => self.lookAt(new THREE.Vector3(0, 0, 0))} />
              <Suspense fallback={null}>
                <Earth />
              </Suspense>
            </Canvas> */}
          </div>
      </MeSection>
    </>
  )
};

export default Me;