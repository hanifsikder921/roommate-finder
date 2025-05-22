import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import PostCard from '../../components/PostCard/PostCard';

const BrowsListing = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://roommate-finder-server-site.vercel.app/items')
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error loading posts:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner text-primary text-2xl"></span>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">

            <h2 className="text-3xl font-bold text-center mb-6">All Roommate Listings</h2>



            {/* small device design */}

            <div className="block md:hidden space-y-6">
                {posts.map(post => (
                    <PostCard key={post._id} post={post} />
                ))}
            </div>



            {/* large device design for assignment requirement */}
            <div className="hidden md:block overflow-x-auto">
                <table className="table w-full">
                    <thead className='bg-base-300'>
                        <tr className="text-left">
                            <th>Sl No</th>
                            <th>Title</th>
                            <th>Posted By</th>
                            <th>Location</th>
                            <th>Rent</th>
                            <th>Available From</th>
                            <th>Room Type</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post, index) => (
                            <tr key={post._id} className="hover:bg-gray-50 border-t">
                                <td>{index + 1}</td>
                                <td>{post?.title || "N/A"}</td>
                                <td>{post?.userName || "N/A"}</td>
                                <td>{post?.location || "N/A"}</td>
                                <td>${post?.amount || "N/A"}</td>
                                <td>{post?.availability || "N/A"}</td>
                                <td>{post?.type || "Any"}</td>
                                <td className='text-center'>
                                    <Link to={`/details/${post._id}`} className="btn btn-sm bg-blue-600 text-white hover:bg-blue-700">
                                        See More
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default BrowsListing;
