import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Header/Navbar';
import Footer from './../components/Footer/Footer';



const MainLayout = () => {
    return (
        <div>

            <header className='border-b border-base-300 '>
                <Navbar></Navbar>
            </header>


            <main>

                {/* Dynamic Change Element */}
                <section>
                    <Outlet></Outlet>
                </section>

            </main>


            <Footer></Footer>




        </div>
    );
};

export default MainLayout;