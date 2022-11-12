import React from 'react';
import whitning from '../../../assets/images/whitening.png';
import cavity from '../../../assets/images/cavity.png';
import fluoride from '../../../assets/images/fluoride.png';
import ServiceCard from './ServiceCerd/ServiceCard';

const Services = () => {
    const cardsData = [
        {
            id: 1,
            image: fluoride,
            name: 'Fluoride Treatment',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
        {
            id: 2,
            image: cavity,
            name: 'Cavity Filling',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
        {
            id: 3,
            image: whitning,
            name: 'Teeth Whitening',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
    ]
    return (
        <div>
            <p className='text-primary font-bold lg:mt-[131px] mt-[82px]'>OUR SERVICES</p>
            <p className='text-xl'>Service we provide</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-[34px]'>
                {
                    cardsData.map(cardData => <ServiceCard
                        key={cardData.id}
                        cardData={cardData}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;