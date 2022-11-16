import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {

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

        console.log(bookingInfo);
        setTreatment(null)
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
                        <input name='patientName' type="text" placeholder="Name" className="input input-bordered w-full mt-[23px]" required />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full mt-[23px]" required />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full mt-[23px]" required />
                        <button type="submit" className='btn btn-accent w-full mt-[23px]'>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;