import React from 'react';
import bannerImg from '../../../assets/images/chair.png';
import bgImg from '../../../assets/images/bg.png';
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';

const Banner = () => {
    return (
        <div className="hero">
            <div className="lg:hero-content mt-[70] lg:mt-[120px] flex-col lg:flex-row-reverse">
                <img src={bannerImg} className="rounded-lg shadow-2xl lg:w-1/2" alt='' />
                <div className={`text-start lg:w-1/2 mt-[60px] lg:mt-0`} style={{
                    background: `url(${bgImg})`, backgroundSize: '320px 516px',
                }}>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Banner;