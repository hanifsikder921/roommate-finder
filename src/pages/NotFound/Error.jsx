import React from 'react';
import { Link } from 'react-router';
import errorAnimation from '../../assets/errorAnimation.json'
import Lottie from 'lottie-react';

const Error = () => {
    return (
        <div>

            <main className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">


                    <div className='w-1/2 mx-auto'>

                        <Lottie animationData={errorAnimation}> </Lottie>
                    </div>

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