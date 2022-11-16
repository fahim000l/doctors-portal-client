import React from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {



    return (
        <section className='lg:mt-[242px] mt-[70px]'>
            <div className="hero">
                <div className="w-full hero-content justify-evenly flex-col lg:flex-row-reverse">
                    <img src={chair} alt='dentistChair' className="lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className='lg:w-1/2 mt-[64px] lg:mt-0'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        ></DayPicker>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;