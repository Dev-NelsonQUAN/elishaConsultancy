import React from 'react'
import Heropage from './components/Heropage'
import GlobalLayout from './layout/GlobalLayout'
import AboutUs from './components/AboutUs'
import Services from './components/Services'

const App = () => {
  return (
    <GlobalLayout>

      <Heropage />
      <AboutUs />
      <Services />

      {/* <Header /> */}
    </GlobalLayout >
  )
}

export default App