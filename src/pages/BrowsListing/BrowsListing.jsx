import React, { useEffect, useState } from 'react';
import PostCard from '../../components/PostCard/PostCard';


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
                    <PostCard key={post._id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default BrowsListing;
