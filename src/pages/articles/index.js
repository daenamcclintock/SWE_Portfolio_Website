import React, {useState} from 'react'
import { ReactNotifications } from 'react-notifications-component';
import Footer from '../../components/Footer/Footer';
import { Layout } from '../../layout/Layout';

const articles = () => {
    return (
        <>
            <ReactNotifications />
                <h1>Articles</h1>
            <Footer />
        </>
    )
}

export default articles;