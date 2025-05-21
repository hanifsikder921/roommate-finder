import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const BrowsListing = () => {
    const [posts, setPosts] = useState([]); 

    useEffect(() => {
        fetch('http://localhost:3000/items')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-6">All Roommate Listings</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {posts.map(post => (
                    <div key={post._id} className="shadow rounded-xl p-6   shadow-purple-500 ">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold text-blue-600">{post.title}</h3>
                            <span className={`badge ${post.availability === "available" ? "badge-success" : "badge-error"} text-base-100`}>
                                {post.availability}
                            </span>
                        </div>

                        <div className="space-y-2">
                            <p><span className="font-semibold">Location:</span> {post.location}</p>
                            <p><span className="font-semibold">Rent Amount:</span> ${post.amount}</p>
                            <p><span className="font-semibold">Type:</span> {post.type}</p>
                            <p><span className="font-semibold">Lifestyle:</span> {post.lifestyle}</p>
                            <p><span className="font-semibold">Posted by:</span> {post.userName} ({post.userEmail})</p>
                        </div>

                        <div className="mt-4 text-right">
                            <Link to={`/details/${post._id}`}>
                                <button className="btn btn-primary w-full">See More</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrowsListing;
