import React from 'react'
import Contact from '../components/Contact/Contact';
import Me from '../components/Me/Me';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { BackgroundImage } from '../components/Me/MeStyles';
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.min.css';

const Home = () => {

	const successNotficiation = () => {
		Store.addNotification({
			title: "Success!",
			message: "Message successfully sent!",
			type: "success",
			container: "center",
			animationIn: ["animate__animated", "animate__fadeIn"],
			animationOut: ["animate__animated", "animate__fadeOut"],
			dismiss: {
			  duration: 5000,
			  onScreen: true
			}
		});
	}

	const failNotification = () => {
		Store.addNotification({
			title: "Error",
			message: "Failed to send message. Please reload and try again.",
			type: "danger",
			container: "center",
			animationIn: ["animate__animated", "animate__fadeIn"],
			animationOut: ["animate__animated", "animate__fadeOut"],
			dismiss: {
				duration: 5000,
				onScreen: true,
				pauseOnHover: true,
			}
		});
	}

  return (
	<>
		<ReactNotifications />
		<Layout>
			<BackgroundImage>
				<Section >
					<Me />
				</Section>
			</BackgroundImage>
		<Projects />
		<Technologies />
		<Timeline />
		<Contact successNotficiation={successNotficiation} failNotification={failNotification} />
		</Layout>
	</>
  );
};

export default Home;
