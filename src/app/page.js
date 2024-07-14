import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landing-page'
import Secondpage from './components/Secondpage'
import Cherrypage from './components/Cherrypage'

function page() {
  return (
    <div>
      <Navbar />
      <Landingpage/>
      <Secondpage/>
      <Cherrypage/>
    

    </div>
  )
}

export default page
