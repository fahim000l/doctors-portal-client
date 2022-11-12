import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointmentBg from '../../../assets/images/appointment.png'
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';

const AppointSection = () => {
    return (
        <div
            className="hero lg:mt-[169px] mt-[70px] rounded-lg"
            style={{ background: `url(${appointmentBg})` }}
        >
            <div className="hero-content flex-col lg:flex-row">
                <img alt='' src={doctor} className="-mt-32 lg:w-1/2 hidden lg:block rounded-lg shadow-2xl" />
                <div className='text-start sm:p-2'>
                    <p className='text-primary font-bold text-xl'>Appointment</p>
                    <h1 className="text-3xl lg:text-5xl font-bold text-white">Make an appointment Today</h1>
                    <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryBtn>Make Appointment</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default AppointSection;