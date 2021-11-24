import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Container from './components/pages/layout/Container'
import Navbar from './components/pages/layout/Navbar'
import Footer from './components/pages/layout/Footer'
import Projects from './components/pages/Projects'


function App() {
  return (
    <Router>
    <Navbar />
      <Container customClass="min-height">
      <Routes>
       
            <Route path='/' element={<Home/>} />
            <Route path='/company' element={<Company/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/newproject' element={<NewProject/>} />
       
      </Routes>
      </Container>
     

     <Footer />
    </Router>
  )
  }
export default App;
