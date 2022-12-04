import React, {useState} from 'react'
import { ReactNotifications } from 'react-notifications-component';
import ImgGen from '../../components/ImgGen/ImgGen';
import ArticlesHeader from '../../components/ArticlesHeader/ArticlesHeader';
import Footer from '../../components/Footer/Footer';

const imgGen = () => {
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