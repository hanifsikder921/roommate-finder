import React from 'react';
import { FaHandshake, FaShieldAlt, FaMoneyBillWave, FaClock } from 'react-icons/fa';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <FaHandshake className="text-4xl text-purple-500" />,
            title: "Trusted Roommate Matching",
            description: "We verify every listing and help you connect with real, compatible roommates you can trust."
        },
        {
            icon: <FaShieldAlt className="text-4xl text-purple-500" />,
            title: "Safe & Secure",
            description: "Our platform ensures your safety by reviewing user profiles, enabling you to feel confident while searching."
        },
        {
            icon: <FaMoneyBillWave className="text-4xl text-purple-500" />,
            title: "Affordable Living",
            description: "Find budget-friendly rooms that fit your lifestyle and save on housing costs."
        },
        {
            icon: <FaClock className="text-4xl text-purple-500" />,
            title: "24/7 Availability",
            description: "Access our platform anytime, anywhere — find or post roommates at your convenience."
        },
    ];

    return (
        <div className="py-16 bg-base-300">
            <div className="  mx-auto px-4 md:px-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center  mb-10">
                    Why Choose Us
                </h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 cursor-pointer ">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="rounded-2xl shadow shadow-amber-300 p-6 hover:shadow-md dark:hover:shadow-purple-500 transition duration-300"
                        >
                            <div className="mb-4 flex justify-center text-primary dark:text-purple-400">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-center  mb-2">
                                {feature.title}
                            </h3>
                            <p className=" text-center">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default WhyChooseUs;
