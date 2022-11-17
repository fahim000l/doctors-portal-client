import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {

    const { user } = useContext(AuthContext);
    const { name, slots } = treatment;

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const patientName = form.patientName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;
        const treatment = name;
        const date = format(selectedDate, 'PP');

        const bookingInfo = {
            selectedDate: date,
            treatment,
            slot,
            patientName,
            patientEmail: email,
            pathentPhoneNumber: phone
        };

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking Confirmed');
                    refetch();
                }
                else {
                    setTreatment(null);
                    toast.error(data.message);
                }
            })

    }


    return (
        <div>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold text-start">{name}</h3>
                    <form onSubmit={handleSubmit} className='flex items-center flex-col justify-evenly mt-[47px]'>
                        <input type="text" disabled value={`${format(selectedDate, 'PP')}`} placeholder="Type here" className="input input-bordered w-full mt-[23px] font-bold" />
                        <select name='slot' className="select select-bordered w-full mt-[23px]">
                            {
                                slots.map(slot => <option
                                    key={slot}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='patientName' defaultValue={user?.displayName} readOnly type="text" placeholder="Name" className="input input-bordered w-full mt-[23px]" required />
                        <input name='email' defaultValue={user?.email} type="email" placeholder="Email" className="input input-bordered w-full mt-[23px]" required />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full mt-[23px]" required />
                        <button type="submit" className='btn btn-accent w-full mt-[23px]'>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;