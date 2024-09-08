import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Navbar from './NavBar/Components/navBar.tsx';
import MainMenu from './Header/components/Header.js';
import Footer from './Footer/components/Footer.js';

const Layout: React.FC = () => (
    <>
        <MainMenu />  
        <Navbar />  
        <Outlet />  
        <Footer />  
    </>
);

export default Layout;
