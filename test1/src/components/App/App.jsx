import { Container } from '@chakra-ui/react'
import React from 'react'
import AppRoutes from './Routes/Routes'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Sidebar from './Sidebar/Sidebar'


const App = () => {
  return (
    <>
    <Header/>
    <Container maxW={'1280px'}>
        <AppRoutes/>
        <Sidebar/>
    </Container>
    <Footer/>
    </>

  )
}

export default App