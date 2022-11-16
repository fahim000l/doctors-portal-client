import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentCard from './AppointmentCard/AppointmentCard';
import BookingModal from './AppointmentCard/BookingModal/BookingModal';

const AvailableAppointment = ({ selectedDate }) => {

    const [appointmentsData, setAppointmentsData] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('AppointData.json')
            .then(res => res.json())
            .then(data => setAppointmentsData(data))
    }, [])


    return (
        <section className='lg:mt-[257px] mt-[57px] mb-[164px] lg:mb-[137px]'>
            <p className='text-xl font-bold text-secondary'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-[35px] lg:mt-[100px] mt-[57px]'>
                {
                    appointmentsData.map(appointmentData => <AppointmentCard
                        key={appointmentData._id}
                        appointmentData={appointmentData}
                        setTreatment={setTreatment}
                    ></AppointmentCard>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;