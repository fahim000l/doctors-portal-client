import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard/InfoCard';

const InfoCards = () => {

    const cardsData = [
        {
            id: 1,
            name: 'Opening Hours',
            details: 'Everyday 9am to 5pm',
            image: clock,
            bgColor: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Visit our location',
            details: 'Brooklyn, NY 10036, United States',
            image: marker,
            bgColor: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact us now',
            details: '+000 123 456789',
            image: phone,
            bgColor: 'bg-gradient-to-r from-primary to-secondary'
        },
    ];

    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-[24px] mt-[80px] lg:mt-[239px]'>
            {
                cardsData.map(cardData => <InfoCard
                    key={cardData.id}
                    cardData={cardData}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;