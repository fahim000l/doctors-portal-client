import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { confirmAlert } from 'react-confirm-alert';

const ManageDoctors = () => {


    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: () => fetch(`http://localhost:5000/doctors`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('doctors token')}`
            }
        })
            .then(res => res.json())
    });

    if (isLoading) {
        return <p>Loading ...</p>
    };

    const handleDelete = (doctor) => {
        confirmAlert({
            title: 'Delete Confirmation',
            message: `Are you sure, you want to delete ${doctor.name}`,
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        console.log('yes');
                        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
                            method: 'DELETE',
                            headers: {
                                authorization: `bearer ${localStorage.getItem('doctors token')}`
                            }
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                if (data.acknowledged) {
                                    refetch();
                                }
                            })
                    }
                },
                {
                    label: 'No',
                    onClick: () => {
                        return
                    }
                }
            ]
        });

        // console.log(confirmation);
    }


    return (
        <div className='mt-[55px]'>
            <p className='text-3xl font-bold mb-[25px] text-start'>Manage Doctors</p>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            doctors.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-[40px] rounded-full">
                                            <img src={doctor.image} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.specialty}</td>
                                <td><button onClick={() => handleDelete(doctor)} className="btn btn-error">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;