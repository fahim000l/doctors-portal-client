import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const FetchError = () => {

    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(err => {
                console.error(err);
            })
    }


    return (
        <div className='mt-[20%]'>
            <h1 className='text-red-500 font-bold lg:text-5xl text-3xl'>Something went wrong !!!</h1>
            <p className='text-red-500 font-bold lg:text-5xl text-3xl'>Please <button onClick={handleLogout} className='btn btn-primary'>Log Out</button> and Log back In</p>
        </div>
    );
};

export default FetchError;