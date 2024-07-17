import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landing-page'
import Secondpage from './components/Secondpage'
import Cherrypage from './components/Cherrypage'
import Videopage from './components/Videopage'
import Stayconnected from './components/Stayconnected'
import Footer from './components/Footer'

function page() {
  return (
    <div>
      <Navbar />
      <Landingpage/>
      <Secondpage/>
      <Cherrypage/>
      <Videopage/>
      <Stayconnected/>
      <Footer/>
    

    </div>
  )
}

export default page
