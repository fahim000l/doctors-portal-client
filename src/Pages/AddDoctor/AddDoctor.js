import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const imageBBSecret = process.env.REACT_APP_imagebb_key;

    const { data: specialties = [] } = useQuery({
        queryKey: ['appointmentspecialty'],
        queryFn: () => fetch('http://localhost:5000/appointmentspecialty', {
            headers: {
                authorization: `bearer ${localStorage.getItem('doctors token')}`
            }
        })
            .then(res => res.json())
    })

    const handleAddDoctor = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        fetch(`https://api.imgbb.com/1/upload?key=${imageBBSecret}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData.data.url);
                // if (imgData.data.success) {
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image: imgData.data.url
                }

                fetch(`http://localhost:5000/doctors`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('doctors token')}`
                    },
                    body: JSON.stringify(doctor)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.acknowledged) {
                            toast.success(`${doctor.name} is now a doctor`);
                            navigate('/dashboard/managedoctors');
                        }
                    });
                // }
            })
    }

    return (
        <div className='mt-[55px]'>
            <p className='text-3xl font-bold mb-[25px] text-start'>Add Doctor</p>
            <form className='mt-[37px]' onSubmit={handleSubmit(handleAddDoctor)} >
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold text-xl">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Name"
                        {...register('name',
                            { required: 'Please provide your name' }
                        )}
                        className="input input-bordered w-full" />
                </div>
                {errors.name && <p className='text-red-600 font-bold text-start'>{errors.name.message}</p>}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold text-xl">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        {...register('email',
                            { required: 'Please provide your email' }
                        )}
                        className="input input-bordered w-full" />
                </div>
                {errors.email && <p className='text-red-600 font-bold text-start'>{errors.email.message}</p>}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold text-xl">Select Specialty</span>
                    </label>
                    <select {...register('specialty',
                        { required: 'Please Select your specialty' }
                    )} className="select select-bordered w-full">
                        {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }
                    </select>
                </div>
                {errors.password && <p className='text-red-500 font-bold text-start'>{errors.password.message}</p>}
                <input
                    type="file"
                    placeholder="Image"
                    {...register('image',
                        { required: 'Please provide your Image' }
                    )}
                    className="input input-bordered w-full" />
                <input className='btn btn-accent w-full mt-[34px]' type="submit" value={'Add Doctor'} />
                {/* <p className='text-red-600 font-bold text-start'>{signUpError}</p> */}
            </form>
        </div>
    );
};

export default AddDoctor;