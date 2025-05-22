import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import {FaMapMarkerAlt, FaHome, FaDollarSign, FaUser,FaEnvelope, FaPhone, FaAlignLeft, FaHeart} from 'react-icons/fa';
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlineEventAvailable } from "react-icons/md";
import { FcViewDetails } from "react-icons/fc";
import Swal from 'sweetalert2';
import Loading from '../../components/Loading/Loading';

const PostDetails = () => {
    const post = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [likeCount, setLikeCount] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);
    const [showContact, setShowContact] = useState(false);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    const handleLike = () => {
        if (user?.email === post.userEmail) {
            Swal.fire({
                icon: 'warning',
                title: "You can't like your own post!",
                timer: 1500,
                showConfirmButton: false
            });
            return;
        }

        if (hasLiked) {
            Swal.fire({
                icon: 'info',
                title: "You've already liked this post.",
                timer: 1500,
                showConfirmButton: false
            });
            return;
        }

        setHasLiked(true);
        setLikeCount(prev => prev + 1);
        setShowContact(true);
    };

    if (!post) {
        return <Loading />;
    }

    return (
        <div className="max-w-5xl mx-auto bg-white dark:bg-base-200 p-8 rounded-2xl shadow-lg my-4 md:my-15 border border-gray-200">
            <h2 className="text-4xl font-bold text-left mb-4 text-primary">{post.title}</h2>

            <p className="text-lg font-semibold mb-6 text-gray-600">
                {likeCount} people interested in
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 text-base-content mb-3">
                <div className="space-y-4">
                    <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-blue-500" /> <span className="font-semibold">Location:</span> {post.location}</p>
                    <p className="flex items-center gap-2"><FaHome className="text-green-500" /> <span className="font-semibold">Room Type:</span> {post.type}</p>
                    <p className="flex items-center gap-2"><FaDollarSign className="text-yellow-500" /> <span className="font-semibold">Rent Amount:</span> ${post.amount}</p>
                    <p className="flex items-center gap-2">
                        <MdOutlineEventAvailable className={`${post.availability === 'available' ? 'text-green-500' : 'text-red-500'}`} />
                        <span>{post.availability}</span>
                    </p>
                </div>

                <div className="space-y-4">
                    <p className="flex items-center gap-2"><FaUser className="text-pink-500" /> <span className="font-semibold">Posted by:</span> {post.userName}</p>
                    <p className="flex items-center gap-2"><FaEnvelope className="text-indigo-500" /> <span className="font-semibold">Email:</span> {post.userEmail}</p>

                    <p className="flex items-center gap-2"><FaAlignLeft className="text-purple-500" /> <span className="font-semibold">Lifestyle:</span> {post.lifestyle}</p>
                </div>
            </div>

            <div className="mb-6">
                <p className="flex items-center gap-2 font-semibold"><FcViewDetails size={20} /> Description:</p>
                <p>{post.description}</p>
            </div>

            <div className="flex gap-4 items-center md:justify-between md:w-[30%]">
                <button
                    onClick={handleLike}
                    className={`btn text-lg px-8 py-2 flex items-center gap-2 ${hasLiked ? 'btn-outline btn-error' : 'btn-secondary'}`}
                >
                    <FaHeart /> {hasLiked ? 'Liked' : 'Like'}
                </button>

                <button className="btn btn-success text-white text-lg px-8 py-2 flex items-center gap-2">
                    <IoChatboxEllipsesOutline /> Chat
                </button>
            </div>

            <div className='my-6'>

            </div>
                {showContact && (
                    <span className="flex items-center gap-2 border w-5/6 md:w-[30%] p-2 rounded-md"><FaPhone className="text-orange-500" /> <span className="font-semibold">Contact:</span> {post.contactInfo}</span>
                )}
        </div>
    );
};

export default PostDetails;
