import React from 'react'
import { NavLink } from 'react-router';
import ThemeToggle from '../ThemeToggle';



const Navbar = () => {




    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between max-w-screen-2xl mx-auto p-4">
                    <a
                        href="#"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="h-8"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Hanif Sikder
                        </span>
                    </a>

                    <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <ThemeToggle/>

                        <a
                            href="#"
                            className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                        >
                            Login
                        </a>
                        <a
                            href="#"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Sign up
                        </a>
                    </div>

                    <div
                        id="mega-menu-icons"
                        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    >
                        <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                            <NavLink
                                to="/"
                                className="block py-2 px-3 text-blue-600 md:hover:text-blue-600 dark:text-blue-400 dark:hover:text-white"
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/about"
                                className="block py-2 px-3 text-blue-600 md:hover:text-blue-600 dark:text-blue-400 dark:hover:text-white"
                            >
                                About
                            </NavLink>

                            <NavLink
                                to="/contact"
                                className="block py-2 px-3 text-blue-600 md:hover:text-blue-600 dark:text-blue-400 dark:hover:text-white"
                            >
                                Contact
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
