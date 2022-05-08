import React from 'react';
import Link from 'next/link';
import Modal from 'react-modal';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './MeStyles';


const Me = (props) => {
  const [modalOpen, setModalOpen] = React.useState(false)

  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Daena McClintock
          </SectionTitle>
          <SectionText>
            Fullstack Software Engineer <br /> Blockchain Developer
          </SectionText>
          <div>
            <Link href='/resume'>
                <Button>Resume</Button>
            </Link>
          </div>
        </LeftSection>
      </Section>
    </>
  )
};

export default Me;