import React from 'react';
import patient1 from '../../../assets/images/people1.png'
import patient2 from '../../../assets/images/people2.png'
import patient3 from '../../../assets/images/people3.png'
import ReviewCard from './ReviewCard/ReviewCard';
import quotation from '../../../assets/icons/quote.svg'

const ReviewsSection = () => {
    const reviewData = [
        {
            id: 1,
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            paticentInfo: {
                image: patient1,
                patientName: 'Winson Herry',
                livingIn: 'California'
            }
        },
        {
            id: 2,
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            paticentInfo: {
                image: patient2,
                patientName: 'Winson Herry',
                livingIn: 'California'
            }
        },
        {
            id: 3,
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            paticentInfo: {
                image: patient3,
                patientName: 'Winson Herry',
                livingIn: 'California'
            }
        },
    ]
    return (
        <div>
            <div className='flex justify-between text-start mt-[76px] lg:mt-[84px]'>
                <div>
                    <p className='text-primary font-bold text-xl'>Testimonial</p>
                    <p className='text-2xl'>What Our Patients Says</p>
                </div>
                <div>
                    <img className='lg:w-48 w-24' src={quotation} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-[57px]'>
                {
                    reviewData.map(review => <ReviewCard
                        key={review.id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default ReviewsSection;