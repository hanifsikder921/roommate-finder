import React from 'react';
import BannerSlider from '../../components/Slider/BannerSlider';
import { useLoaderData } from 'react-router';
import PostCard from '../../components/PostCard/PostCard';
import WhyChooseUs from '../../components/ExtraSection/WhyChooseUs';


const Home = () => {
    const allData = useLoaderData();
    const availablePosts = allData.filter(post => post.availability === 'available').slice(0, 6);

    return (
        <div className='md:w-11/12 mx-auto my-8'>
            <BannerSlider />

            <section className='md:my-20'>
                <h2 className='text-base-500 text-center text-3xl text-purple-500 font-bold '>
                    <span className='divider'>Available Rooms</span>
                </h2>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                    {availablePosts.map(post => (
                        <PostCard key={post._id} post={post} />
                    ))}
                </div>
            </section>


            <section className='bg-base-300'>
                <WhyChooseUs/>
            </section>


        </div>
    );
};

export default Home;
