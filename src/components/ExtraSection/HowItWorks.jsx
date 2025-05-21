import React from "react";
import { FaSearchLocation, FaUserFriends, FaHandshake, FaCheckCircle } from "react-icons/fa";
import { BsArrowRight, BsArrowDown } from "react-icons/bs";

const steps = [
  {
    icon: <FaSearchLocation className="text-3xl text-primary" />,
    title: "Browse Listings",
    description: "Explore verified listings tailored to your preferences.",
  },
  {
    icon: <FaUserFriends className="text-3xl text-primary" />,
    title: "Connect With Users",
    description: "Contact potential roommates through secure messaging.",
  },
  {
    icon: <FaHandshake className="text-3xl text-primary" />,
    title: "Fix a Meetup",
    description: "Meet in person and finalize your decision.",
  },
  {
    icon: <FaCheckCircle className="text-3xl text-primary" />,
    title: "Move In Easily",
    description: "Enjoy your new living experience stress-free.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4  mb-16 text-base-content">
      <div className="mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-14">
          How <span className="text-primary">It Works</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 flex-wrap cursor-pointer">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-4 justify-around">
              
              <div className="p-6 rounded-2xl shadow-md shadow-purple-400  hover:shadow-md hover:shadow-amber-200 transition text-center">
                <div className="mb-3 flex justify-center">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                <p className="text-sm ">{step.description}</p>
              </div>

        
              {index !== steps.length - 1 && (
                <>
                  <BsArrowDown className="text-2xl text-primary block md:hidden" />
                  <BsArrowRight className="text-2xl text-primary hidden md:block" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
