import React, {useState} from 'react'
import { ReactNotifications } from 'react-notifications-component';
import Articles from '../../components/Articles/Articles';
import Footer from '../../components/Footer/Footer';

const articles = () => {
    return (
        <>
            <ReactNotifications />
                <Articles />
            <Footer />
        </>
    )
}

export default articles;