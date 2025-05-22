import React, { useEffect, useState } from 'react';
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
