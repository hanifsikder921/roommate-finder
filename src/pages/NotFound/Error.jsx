import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
           
            <main className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold">404</p>
                    <h1 className="mt-4 text-5xl font-bold tracking-tight  sm:text-6xl">
                        Page Not Found
                    </h1>
                    <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
                        Sorry, we couldn’t find the page you’re looking for.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
                        <Link
                            to="/"
                            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                        >
                            Go Back Home
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Error;