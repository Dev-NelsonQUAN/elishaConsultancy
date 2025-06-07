import React from 'react'
import GlobalLayout from './layout/GlobalLayout'
import Heropage from './components/pages/Heropage'
import AboutUs from './components/pages/AboutUs'
import Services from './components/pages/Services'
import Consultancy from './components/pages/Consultancy'
import Footer from './components/static/Footer'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'

const App = () => {
  return (
    <>
    <GlobalLayout>
      <RouterProvider router={router} />      
      {/* <Heropage />
      <AboutUs />
      <Services />
      <Consultancy />
      <Footer /> */}
    </GlobalLayout >
    </>
  )
}

export default App