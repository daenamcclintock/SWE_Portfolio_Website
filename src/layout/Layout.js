import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({ children, open, setOpen }) => {
  return (
    <Container>
     <Header open={open} setOpen={setOpen}/>
     <main>{children}</main> 
     <Footer open={open}/>
    </Container>
  )
}
