import React, { useEffect, useState } from 'react';
import BannerSlider from '../../components/Slider/BannerSlider';
import { useLoaderData } from 'react-router';
import PostCard from '../../components/PostCard/PostCard';
import WhyChooseUs from '../../components/ExtraSection/WhyChooseUs';
import HowItWorks from '../../components/ExtraSection/HowItWorks';
import { Helmet } from 'react-helmet-async';
import Newsletter from '../../components/ExtraSection/Newsletter';

const Home = () => {
    const allData = useLoaderData();
    const [loading, setLoading] = useState(true); 
    const [availablePosts, setAvailablePosts] = useState([]);

    useEffect(() => {
        if (allData) {
            const filtered = allData.filter(post => post.availability === 'available').slice(0, 6);
            setAvailablePosts(filtered);
            setLoading(false);
        }
    }, [allData]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner text-purple-500 text-2xl"></span>
            </div>
        );
    }

    return (
        <div className='w-11/12 mx-auto my-8'>
            <Helmet priority="high"><title> Home - RoomMate Finder</title></Helmet>
            <BannerSlider />

            <section className='md:my-20'>
                <h2 className='text-base-500 text-center text-3xl text-purple-500 font-bold'>
                    <span className='divider'>Available Rooms</span>
                </h2>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                    {availablePosts.map(post => (
                        <PostCard key={post._id} post={post} />
                    ))}
                </div>
            </section>

            <section className='bg-base-300 my-16 rounded-lg shadow'>
                <HowItWorks />
            </section>
            <section className='bg-base-300 my-16 rounded-lg shadow'>
                <Newsletter/>
            </section>

            <section className='bg-base-300 mb-16 rounded-lg shadow'>
                <WhyChooseUs />
            </section>
        </div>
    );
};

export default Home;
