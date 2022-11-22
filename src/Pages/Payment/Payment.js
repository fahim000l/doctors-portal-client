import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PaymentCard from './PaymentCard/PaymentCard';

const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);

const Payment = () => {

    const bookingInfo = useLoaderData();
    const { treatment, slot, selectedDate, patientEmail, patientName, pathentPhoneNumber, price } = bookingInfo;
    console.log(bookingInfo);

    console.log(stripePromise);

    return (
        <div className='mt-[55px]'>
            <p className='text-3xl font-bold mb-[25px] text-start'>Payment for <span className='text-primary'>{treatment}</span></p>
            <p className='text-2xl text-start'>on <span className='font-bold'>{selectedDate}</span> at <span className='font-bold'>{slot}</span></p>
            <p className='text-2xl text-start'>The amount is <span className='font-bold'>${price}</span></p>

            <div className='w-96 mt-5'>
                <Elements stripe={stripePromise}>
                    <PaymentCard booking={bookingInfo} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;