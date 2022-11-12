import React from 'react';

const InfoCard = ({ cardData }) => {

    const { name, details, image, bgColor } = cardData

    return (
        <div className={`card card-side shadow-xl py-[10px] lg:px-[25px] px-0 flex flex-col lg:flex-row ${bgColor}`}>
            <figure><img src={image} alt="Movie" className='w-[25%] lg:w-full' /></figure>
            <div className="lg:card-body px-[10px] text-start text-white">
                <h2 className="card-title font-semibold">{name}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default InfoCard;