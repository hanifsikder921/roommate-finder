import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className=" py-8 md:py-16 px-4 bg-base-300">
            <div className="container mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <Link to='/' className=" text-2xl font-semibold text-violet-500 hidden md:flex">Roommate <span className="text-orange-500"> F</span>inder </Link>
                        <p className="">
                            Providing the best services since 2025.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/hanif.sikder.920" target="_blank" rel="noopener noreferrer" >
                                <FaFacebook size={20} />
                            </a>
                            <a href="https://x.com/hanifsikder920" target="_blank" rel="noopener noreferrer" >
                                <FaTwitter size={20} />
                            </a>
                            <a href="https://www.instagram.com/hanif.sikder.920/" target="_blank" rel="noopener noreferrer" >
                                <FaInstagram size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/hanifsikder920/" target="_blank" rel="noopener noreferrer" >
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                <Link to='/' >
                                    Home
                                </Link>
                            </li>
                            <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                <Link to='/addPost' >
                                    Add to Find Roommate
                                </Link>
                            </li>

                            <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                <Link to='/browsePost' >
                                    Browse Listing
                                </Link>
                            </li>

                            <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                <Link to='/myListing' >
                                    My Listing
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Legal</h3>
                        <ul className="space-y-2">
                            <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                <Link to="/terms" >
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                <Link to="/privacy" >
                                    Privacy Policy
                                </Link>
                            </li>

                        </ul>
                        
                    </div>


                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
                    <p>© {new Date().getFullYear()}
                        Roommate Finder All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;