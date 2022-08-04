import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({ children, isOpen, open }) => {
  return (
    <Container>
     <Header isOpen={isOpen} open={open}/>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}
