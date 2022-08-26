import React, {useState} from 'react'
import { ReactNotifications } from 'react-notifications-component';
import Articles from '../../components/Articles/Articles';
import ArticlesHeader from '../../components/ArticlesHeader/ArticlesHeader';
import Footer from '../../components/Footer/Footer';

const articles = () => {
    return (
        <>
            <ReactNotifications />
            <ArticlesHeader />
            <Articles />
            <Footer />
        </>
    )
}

export default articles;