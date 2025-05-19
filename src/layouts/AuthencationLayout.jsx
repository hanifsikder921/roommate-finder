import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Header/Navbar';

const AuthencationLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthencationLayout;