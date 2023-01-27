import React, { useState, useEffect } from 'react'
import { ReactNotifications } from 'react-notifications-component';
import ImgGen from '../../components/ImgGen/ImgGen';
import ArticlesHeader from '../../components/ArticlesHeader/ArticlesHeader';
import Footer from '../../components/Footer/Footer';
import Aos from 'aos'
import "aos/dist/aos.css"

const imgGen = () => {

    useEffect(() => {
		Aos.init({})
	}, [])

    return (
        <>
            <ReactNotifications />
            <ArticlesHeader />
            <ImgGen />
            <Footer />
        </>
    )
}

export default imgGen;