import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const MyAppointments = () => {

    const { user } = useContext(AuthContext);

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: () => fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('doctors token')}`
            }
        }
        )
            .then(res => res.json())
    });


    if (isLoading) {
        return <p>Loading ...</p>
    }

    return (
        <div className='mt-[55px]'>
            <p className='text-3xl font-bold mb-[25px] text-start'>My Appointments</p>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.patientName}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.selectedDate}</td>
                                <td>{booking.slot}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;