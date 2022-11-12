import React from 'react';
import contactusbgImg from '../../../assets/images/appointment.png'
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';

const ContactUsSection = () => {
    return (
        <section
            className='lg:mt-[149px] mt-[129px] p-10'
            style={{ background: `url(${contactusbgImg})` }}
        >
            <div className='text-white'>
                <p className='text-primary text-xl font-bold'>Contact Us</p>
                <p className='text-2xl'>Stay connected with us</p>
            </div>
            <form className='flex items-center flex-col justify-evenly'>
                <input type="email" placeholder="Email Address" className="mt-10 input input-bordered input-md w-full lg:w-[50%]" />
                <input type="text" placeholder="Subject" className="mt-10 input input-bordered input-md w-full lg:w-[50%]" />
                <textarea className="mt-10 mb-10 w-full lg:w-[50%] textarea textarea-bordered" placeholder="Your message"></textarea>
                <PrimaryBtn submit={'submit'}>Submit</PrimaryBtn>
            </form>
        </section>
    );
};

export default ContactUsSection;