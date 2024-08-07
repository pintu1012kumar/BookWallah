import React from 'react'
import Navbar from '../Navbar'
import Contact from '../Contact'
import Footer from '../Footer'

const ContactSection = () => {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
        <Contact/>
    </div>
    <Footer/>
   </>
  )
}

export default ContactSection
