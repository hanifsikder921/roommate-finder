import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Header/Navbar';
import Footer from './../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">

      
            <header className='border-b border-base-300'>
                <Navbar />
            </header>

           
            <main className="flex-grow">
                <section className="px-4 py-6">
                    <Outlet />
                </section>
            </main>

          
            <footer className='border-t border-base-300'>
                <Footer />
            </footer>

        </div>
    );
};

export default MainLayout;
