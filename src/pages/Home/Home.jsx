import React from 'react';
import BannerSlider from '../../components/Slider/BannerSlider';

const Home = () => {
    return (
        <div className='md:w-11/12 mx-auto my-8'>
            <BannerSlider></BannerSlider>

            <section className='md:my-20'>
                <h2 className='text-base-500 text-center text-3xl text-purple-500 font-bold '><span className='divider  '>Available Rooms</span></h2>
                <div>

                    
                </div>
                
            </section>


        </div>
    );
};

export default Home;