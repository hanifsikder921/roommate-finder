import React, { useContext, useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyListing = () => {
    const { user } = useContext(AuthContext);
    const allPost = useLoaderData();

    const [posts, setPost] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (allPost && user?.email) {
            const myPosts = allPost.filter(post => post.userEmail === user.email);
            setPost(myPosts);
            setLoading(false);
        }
    }, [allPost, user]);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://roommate-finder-server-site.vercel.app/items/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Listing has been deleted.",
                                icon: "success",
                                timer: 1500,
                            });
                            const remainingPost = posts.filter(post => post._id !== _id);
                            setPost(remainingPost);
                        }
                    });
            }
        });
    };

    
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner text-primary text-2xl"></span>

            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 ">
            <h2 className="text-3xl font-bold mb-6 text-center text-primary">
                My Posted Roommate Listings
            </h2>


            {posts.length === 0 ? (
                <p className="text-center text-gray-500">You have not added any posts yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    {/* Desktop View */}
                    <div className="hidden md:block">
                        <table className="table w-full">
                            <thead className="bg-base-200 text-base font-semibold">
                                <tr>
                                    <th>SL.</th>
                                    <th>Title</th>
                                    <th>Location</th>
                                    <th>Amount</th>
                                    <th>Availability</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map((post, index) => (
                                    <tr key={post._id} className="hover:bg-base-300 transition">
                                        <td>{index + 1}</td>
                                        <td>{post.title}</td>
                                        <td>{post.location}</td>
                                        <td>${post.amount}</td>
                                        <td>
                                            <span
                                                className={`badge ${post.availability === 'available' ? 'badge-success' : 'badge-error'} `}
                                            >
                                                {post.availability}
                                            </span>
                                        </td>
                                        <td className="space-x-2 text-center">
                                            <Link to={`/update/${post._id}`} className="btn btn-sm btn-warning ">
                                                <FaEdit /> Update
                                            </Link>
                                            <button onClick={() => handleDelete(post._id)} className="btn btn-sm btn-error ">
                                                <FaTrash /> Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile View */}
                    <div className="md:hidden space-y-4 mx-auto">
                        {posts.map((post, index) => (
                            <div key={post._id} className="p-4 rounded-lg bg-base-300 shadow-md">
                                <p className='font-semibold text-lg line-clamp-1'><span className="font-bold">{index + 1}</span> - {post.title}</p>
                                <p><span className="font-semibold">Location:</span> {post.location}</p>
                                <p><span className="font-semibold">Amount:</span> ${post.amount}</p>
                                <p>
                                    <span className="font-semibold">Availability:</span>{' '}
                                    <span className={`badge ${post.availability === 'available' ? 'badge-success' : 'badge-error'} `}>
                                        {post.availability}
                                    </span>
                                </p>
                                <div className="flex justify-center mt-3 gap-2">
                                    <Link to={`/update/${post._id}`} className="btn btn-sm btn-warning ">
                                        <FaEdit /> Update
                                    </Link>
                                    <button onClick={() => handleDelete(post._id)} className="btn btn-sm btn-error ">
                                        <FaTrash /> Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyListing;
