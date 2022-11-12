import React from 'react';

const ReviewCard = ({ review }) => {

    console.log(review);
    const { details, paticentInfo } = review;
    const { image, livingIn, patientName } = paticentInfo;

    return (
        <div className="card shadow-xl">
            <div className="card-body text-start">
                <p>{details}</p>
            </div>
            <div className='flex items-center justify-start px-5 py-2'>
                <img className='w-[75px] h-[75px] rounded-full border border-primary border-5 p-1' src={image} alt="" />
                <div className='mx-2'>
                    <p>{patientName}</p>
                    <p>{livingIn}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;