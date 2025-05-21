import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import { FaMapMarkerAlt, FaHome, FaDollarSign, FaCalendarCheck, FaUser, FaEnvelope, FaPhone, FaAlignLeft, FaHeart } from 'react-icons/fa';
import { MdOutlineEventAvailable } from "react-icons/md";

import { FcViewDetails } from "react-icons/fc";
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import Loading from '../../components/Loading/Loading';

const PostDetails = () => {
    const post = useLoaderData(); // full post data
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    const handleLike = () => {
        Swal.fire({
            icon: 'success',
            title: 'You liked this post!',
            timer: 1000,
            showConfirmButton: false,
        });
    };

    if (!post) {
        return <Loading></Loading>
    }

    return (
        <div className="max-w-5xl mx-auto bg-white dark:bg-base-200 p-8 rounded-2xl shadow-lg mt-10 border border-gray-200">
            <h2 className="text-4xl font-bold text-center mb-8 text-primary">{post.title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base-content mb-3">
                <div className="space-y-4">
                    <p className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-blue-500" />
                        <span className="font-semibold">Location:</span> {post.location}
                    </p>
                    <p className="flex items-center gap-2">
                        <FaHome className="text-green-500" />
                        <span className="font-semibold">Room Type:</span> {post.type}
                    </p>
                    <p className="flex items-center gap-2">
                        <FaDollarSign className="text-yellow-500" />
                        <span className="font-semibold">Rent Amount:</span> ${post.amount}
                    </p>
                    <p className="flex items-center gap-2">
                        
                        <MdOutlineEventAvailable className={`${post.availability === 'available' ? 'text-green-500' : 'text-red-500'}`} /> 
                        <span>{post.availability}</span>
                    </p>
                   
                </div>



                <div className="space-y-4">
                    <p className="flex items-center gap-2">
                        <FaUser className="text-pink-500" />
                        <span className="font-semibold">Posted by:</span> {post.userName}
                    </p>
                    <p className="flex items-center gap-2">
                        <FaEnvelope className="text-indigo-500" />
                        <span className="font-semibold">Email:</span> {post.userEmail}
                    </p>
                    <p className="flex items-center gap-2">
                        <FaPhone className="text-orange-500" />
                        <span className="font-semibold">Contact:</span> {post.contactInfo}
                    </p>
                     <p className="flex items-center gap-2">
                        <FaAlignLeft className="text-purple-500" />
                        <span className="font-semibold">Lifestyle:</span> {post.lifestyle}
                    </p>

                </div>



            </div>

            <div>
                <p className=" items-start gap-2">
                   
                    <p className="font-semibold flex items-center"> <FcViewDetails size={20} />Description:</p>
                    <p> {post.description}</p>
                </p>
            </div>


            <div className="mt-10 text-center">
                <button onClick={handleLike} className="btn btn-secondary text-lg px-8 py-2 flex items-center gap-2">
                    <FaHeart /> Like
                </button>
            </div>
        </div>
    );
};

export default PostDetails;
