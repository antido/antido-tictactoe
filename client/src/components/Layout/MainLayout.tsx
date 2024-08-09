import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Partials/MainNavbar';
import Footer from '../Partials/Footer';

const MainLayout = () => {
    
    return (
        <>
            <Navbar />
            
            <div id="mainContent">
                <Outlet />
            </div>

            <Footer />
        </>
    )
}

export default MainLayout;