import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {

    const { createUser, updateUserProfile, logInWithGoogle } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogIn = (data) => {

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userProfile = {
                    displayName: data.name
                }
                updateUserProfile(userProfile)
                    .then(() => { })
                    .catch(err => {
                        console.error(err);
                        setSignUpError(err.message);
                    });
                toast.success('Your account has been created successfully');
            })
            .catch(err => {
                console.message(err);
                setSignUpError(err.message);
            })
    };

    const handleGoogleSignIn = () => {
        logInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <div className='w-[385px] mx-auto rounded-lg shadow-lg p-[29px] lg:my-[236px] my-10'>
            <h1 className='text-2xl font-bold'>Sign Up</h1>
            <form className='mt-[37px]' onSubmit={handleSubmit(handleLogIn)} >
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
                        <span className="label-text font-bold text-xl">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="*****"
                        {...register('password',
                            {
                                required: 'Please provide your password',
                                minLength: { value: 6, message: 'Password must contain at least 6 characters' }
                            }
                        )}
                        className="input input-bordered w-full" />
                </div>
                {errors.password && <p className='text-red-500 font-bold text-start'>{errors.password.message}</p>}
                <input className='btn btn-accent w-full mt-[34px]' type="submit" value={'LOG IN'} />
                <p className='text-red-600 font-bold text-start'>{signUpError}</p>
            </form>
            <p className='mt-[11px] text-sm'>Already have an account? <Link to={'/login'} className='text-secondary'>Please log in</Link> </p>
            <div className='flex items-center justify-evenly mt-[16px]'>
                <hr className='border border-[#CFCFCF] w-[90%]' />
                <p className='mx-[16px]'>OR</p>
                <hr className='border border-[#CFCFCF] w-[90%]' />
            </div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline mt-[25px] w-full">CONTINUE WITH GOOGLE</button>
        </div>
    );
};

export default SignUp;