import React from 'react'
import { createHashRouter } from 'react-router-dom'
import SignUp from "../auth/SignUp"
import Login from '../auth/Login'
import Heropage from '../components/pages/Heropage'
import AboutUs from '../components/pages/AboutUs'
import Services from '../components/pages/Services'
import Consultancy from '../components/pages/Consultancy'
import Footer from '../components/static/Footer'
import ForgotPassword from '../auth/ForgotPassword'
import OTP from '../auth/OTP'
import ConfrimPassword from '../auth/ConfrimPassword'

const router = createHashRouter([
    {
        path: "/",
        element: (
            <>
                <Heropage />
                <AboutUs />
                <Services />
                <Consultancy />
                <Footer />
            </>
        )
    },
    {
        path: '/sign-up',
        element: (<SignUp />)
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/forgot",
        element: <ForgotPassword />
    },
    {
        path: "/otp",
        element: <OTP />
    },
    {
        path: "/confirm",
        element: <ConfrimPassword />
    }
])

export default router