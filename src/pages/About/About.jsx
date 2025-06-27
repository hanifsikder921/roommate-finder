import React from 'react';

const About = () => {
    return (
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4">
            <div className="border border-base-content p-6 rounded-2xl bg-base-200 shadow-md max-w-3xl text-center">
                <h1 className="text-4xl font-bold mb-4 text-base-content">About Us</h1>
                <p className="text-base text-base-content">
                    Welcome to <span className="font-semibold">Roommate Finder</span> — your trusted platform for finding the perfect roommate and a comfortable living space.
                    <br /><br />
                    Whether you're moving to a new city or just want to share your apartment, we help you connect with like-minded people based on lifestyle preferences, location, and budget.
                    <br /><br />
                    Our mission is to make shared living easier, safer, and more convenient for everyone. Happy Roommate Finding!
                </p>
            </div>
        </div>
    );
};

export default About;
