import React from 'react';
import PrimaryBtn from '../../../../Components/PrimaryBtn/PrimaryBtn';

const AppointmentCard = ({ appointmentData, setTreatment }) => {

    const { name, slots, price } = appointmentData;

    return (
        <div className="card shadow-lg">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary font-bold text-2xl">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try next day'}</p>
                <p>{slots.length === 0 ? ('No space available') : (slots.length > 1 ? `${slots.length} spaces are available` : 'One space is available')}</p>
                <p>Amount : $ {price}</p>
                <div className="card-actions justify-end">
                    <PrimaryBtn disabled={(slots.length === 0) && true}>
                        <label onClick={() => setTreatment(appointmentData)} htmlFor="bookingModal" className='btn btn-ghost w-full'>Book Appointment</label>
                    </PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;