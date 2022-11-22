import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../Hooks/UseToken';

const Login = () => {

    const { logIn } = useContext(AuthContext);
    const [logInError, setLogInError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const [loginUserEmail, setLogInUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const { register, formState: { errors }, handleSubmit } = useForm();


    const handleLogIn = (data) => {
        setLogInError('');
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLogInUserEmail(data.email);
            })
            .catch(err => {
                console.error(err);
                setLogInError(err.message);
            })

    }

    return (
        <div className='w-[385px] mx-auto rounded-lg shadow-lg p-[29px] lg:my-[236px] my-10'>
            <h1 className='text-2xl font-bold'>Log In</h1>
            <form className='mt-[37px]' onSubmit={handleSubmit(handleLogIn)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold text-xl">Email</span>
                    </label>
                    <input type="email" {...register("email", { required: 'Please provide your email' })} placeholder="Email" className="input input-bordered w-full" />
                </div>
                {errors.email && <p className='text-red-600 font-bold text-start'>{errors.email.message}</p>}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold text-xl">Password</span>
                    </label>
                    <input
                        type="password"
                        {...register("password",
                            {
                                required: 'Please provide your password',
                                minLength: { value: 6, message: 'Password must contain at least 6 characters' }
                            }
                        )}
                        placeholder="*****" className="input input-bordered w-full" />
                    {errors.password && <p className='text-red-600 font-bold text-start'>{errors.password.message}</p>}
                    <label className="label">
                        <span className="label-text-alt">Forgot Password ?</span>
                    </label>
                </div>
                <input className='btn btn-accent w-full' type="submit" value={'LOG IN'} />
                <p className='text-red-600 font-bold text-start'>{logInError}</p>
            </form>
            <p className='mt-[11px] text-sm'>New to Doctors Portal? <Link to={'/signup'} className='text-secondary'>Create new account</Link> </p>
            <div className='flex items-center justify-evenly mt-[16px]'>
                <hr className='border border-[#CFCFCF] w-[90%]' />
                <p className='mx-[16px]'>OR</p>
                <hr className='border border-[#CFCFCF] w-[90%]' />
            </div>
            <button className="btn btn-outline mt-[25px] w-full">CONTINUE WITH GOOGLE</button>
        </div>
    );
};

export default Login;