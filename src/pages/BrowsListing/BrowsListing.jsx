import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import PostCard from '../../components/PostCard/PostCard';

const BrowsListing = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [filterType, setFilterType] = useState('');
    const postsPerPage = 10;

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

    const handleFilterChange = (event) => {
        setFilterType(event.target.value);
        setCurrentPage(1);
    };

    const handleClearFilter = () => {
        setFilterType('');
        setCurrentPage(1);
    };

    const filteredPosts = filterType
        ? posts.filter(post => post.type === filterType)
        : posts;

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner text-primary text-2xl"></span>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-15">
            <h2 className="text-3xl font-bold text-center mb-2 text-primary">
                Discover Your Ideal Roommate Match
            </h2>
            <p className="text-center mb-6">
                Browse through verified roommate listings tailored to your lifestyle and preferences. Find the perfect living companion today!
            </p>

            <div className='flex flex-col md:flex-row justify-between items-center my-4 gap-2'>

                <p className='font-semibold'>
                    Total <span className='font-bold text-blue-500'>{filteredPosts.length}</span> Post Found
                </p>

                <div className="flex gap-2 items-center">
                    <select
                        value={filterType}
                        onChange={handleFilterChange}
                        className="select focus:outline-0"
                    >
                        <option disabled value="">Filter</option>
                        <option value="Single">Single</option>
                        <option value="Shared">Shared</option>
                        <option value="Master Bedroom">Master Bedroom</option>
                        <option value="Studio">Studio</option>
                        <option value="Sublet">Sublet</option>
                        <option value="Paying Guest (PG)">Paying Guest (PG)</option>
                    </select>

                    {filterType && (
                        <button onClick={handleClearFilter} className="btn btn-sm btn-error text-white">
                            Clear Filter
                        </button>
                    )}
                </div>

            </div>

            {/* Small device design */}
            <div className="block md:hidden space-y-6">
                {currentPosts.map(post => (
                    <PostCard key={post._id} post={post} />
                ))}

                
            </div>


            {/* Large device design */}
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
                        {currentPosts.map((post, index) => (
                            <tr key={post._id} className="hover:bg-base-200 border-t">
                                <td>{startIndex + index + 1}</td>
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

            {currentPosts.length === 0 && (
                <p className="text-center text-red-500 text-lg mt-10">
                    No post found {filterType && `for "${filterType}"`}
                </p>
            )}

            {/* Pagination Controls */}
            <div className="join grid grid-cols-2 my-4">
                <button
                    onClick={handlePreviousPage}
                    className="join-item btn btn-outline"
                    disabled={currentPage === 1}
                >
                    Previous Page
                </button>
                <button
                    onClick={handleNextPage}
                    className="join-item btn btn-outline"
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>

            <div className="text-center mt-2">
                <p>Page {currentPage} of {totalPages}</p>
            </div>
        </div>
    );
};

export default BrowsListing;
