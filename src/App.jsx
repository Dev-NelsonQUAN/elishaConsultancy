import React from 'react'
import Heropage from './components/pages/Heropage'
import GlobalLayout from './layout/GlobalLayout'
import AboutUs from './components/pages/AboutUs'
import Services from './components/pages/Services'
import Consultancy from './components/pages/Consultancy'
import Footer from './components/static/Footer'

const App = () => {
  return (
    <GlobalLayout>
      <Heropage />
      <AboutUs />
      <Services />
      <Consultancy />
      <Footer />
    </GlobalLayout >
  )
}

export default App