import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Header/Navbar';
import Footer from './../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">

      
            <header className='sticky top-0 z-50 border-b border-base-300 bg-base-100'>
                <Navbar />
            </header>

           
            <main className="flex-grow">
                <section className="px-4 py-6">
                    <Outlet />
                </section>
            </main>

          
            <footer >
                <Footer />
            </footer>

        </div>
    );
};

export default MainLayout;
