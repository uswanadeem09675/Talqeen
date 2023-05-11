import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"
function MainRoute({ children }) {
    let [navbar, setNavbar] = useState(false)
    let location = useLocation();
    useEffect(() => {
        if (location.pathname === '/dashboard') {
            setNavbar(false)
        } else if (location.pathname === '/adminvideo') {
            setNavbar(false)
        } else if (location.pathname === '/Admincategories') {
            setNavbar(false)
        }
        else if (location.pathname === '/subCategories') {
            setNavbar(false)
        } else if (location.pathname === '/user') {
            setNavbar(false)
        } else if (location.pathname === '/User') {
            setNavbar(false)
        }
        else if (location.pathname === '/register') {
            setNavbar(false)
        } else if (location.pathname === '/login') {
            setNavbar(false)
        } else if (location.pathname === '/signIn') {
            setNavbar(false)
        } else if (location.pathname === '/panel') {
            setNavbar(false)
        }
        else {
            setNavbar(true)
        }

    }, [location])
    return (
        <React.Fragment>
            {navbar && children}

        </React.Fragment>
    )
}

export default MainRoute 