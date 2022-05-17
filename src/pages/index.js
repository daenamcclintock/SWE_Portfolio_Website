import React, { useState, Fragment } from 'react'
import { v4 as uuid } from 'uuid'

import Contact from '../components/Contact/Contact';
import Me from '../components/Me/Me';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import AutoDismissAlert from '../constants/AutoDismissAlert';
import { BackgroundImage } from '../components/Me/MeStyles';

const Home = () => {

  const [msgAlerts, setMsgAlerts] = useState([])

  const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id) )
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
      )
		})
	}

  return (
    <Layout>
        <BackgroundImage>
          <Section >
              <Me />
          </Section>
        </BackgroundImage>
      <Projects />
      <Technologies />
      <Timeline />
      <Contact msgAlert={msgAlert} />
      {msgAlerts.map((msgAlert) => (
					<AutoDismissAlert
						key={msgAlert.id}
						heading={msgAlert.heading}
						variant={msgAlert.variant}
						message={msgAlert.message}
						id={msgAlert.id}
						deleteAlert={deleteAlert}
					/>
				))}
    </Layout>
  );
};

export default Home;
