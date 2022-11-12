import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';

const DentalCareCard = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mx-auto lg:w-[80%] lg:mt-[154px] mt-[56px]">
            <figure><img src={treatment} alt="Movie" className='lg:w-[50%] rounded-lg' /></figure>
            <div className="card-body text-start lg:w-[50%]">
                <h2 className="card-title font-bold lg:text-3xl text-xl">Exceptional Dental Care, on Your Terms</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div className="card-actions justify-end">
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default DentalCareCard;