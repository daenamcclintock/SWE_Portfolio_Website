import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({ children, setOpen, open }) => {
  return (
    <Container>
     <Header setOpen={setOpen} open={open}/>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}
