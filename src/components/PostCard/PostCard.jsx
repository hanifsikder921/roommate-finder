import React from 'react';
import { Link } from 'react-router';
import { CiLocationOn } from "react-icons/ci";
import { FaHandHoldingUsd, FaUserAlt } from "react-icons/fa";
import { MdOutlineMergeType } from "react-icons/md";
import { LiaStarOfLifeSolid } from "react-icons/lia";
import { TfiEmail } from "react-icons/tfi";
import activeAnimation from '../../assets/acitveAnimation.json';
import Lottie from 'lottie-react';

const PostCard = ({ post }) => {
    const isAvailable = post.availability === "available";

    return (
        <div className="shadow rounded-xl p-6 shadow-purple-500">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-blue-600">{post.title}</h3>

                {/* Availability Badge with Animation */}
                <div className="flex items-center gap-2">
                    {isAvailable && (
                        <div className="w-10 h-10 overflow-hidden  scale-500" >
                            <Lottie
                                animationData={activeAnimation}
                                loop={true}
                            />
                        </div>
                    )}
                    <span className={`badge ${isAvailable ? "badge-success" : "badge-error"} text-white capitalize`}>
                        {post.availability}
                    </span>
                </div>

            </div>

            <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                    <CiLocationOn />
                    <span className="font-semibold">Location:</span> {post.location}
                </p>

                <p className="flex items-center gap-2">
                    <FaHandHoldingUsd />
                    <span className="font-semibold">Rent Amount:</span> ${post.amount}
                </p>

                <p className="flex items-center gap-2">
                    <MdOutlineMergeType />
                    <span className="font-semibold">Type:</span> {post.type}
                </p>

                <p className="flex items-center gap-2">
                    <LiaStarOfLifeSolid />
                    <span className="font-semibold">Lifestyle:</span> {post.lifestyle}
                </p>

                <p className="flex items-center gap-2">
                    <FaUserAlt />
                    <span className="font-semibold">Posted by:</span> {post.userName}
                </p>

                <p className="flex items-center gap-2">
                    <TfiEmail />
                    <span className="font-semibold">Email:</span> {post.userEmail}
                </p>
            </div>

            <div className="mt-4 text-right">
                <Link to={`/details/${post._id}`}>
                    <button className="btn btn-primary w-full">See More</button>
                </Link>
            </div>
        </div>
    );
};

export default PostCard;
