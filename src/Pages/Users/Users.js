import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Users = () => {


    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch(`http://localhost:5000/users`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('doctors token')}`
            }
        })
            .then(res => res.json())
    });

    const handleMakeAdmin = (id, name) => {

        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('doctors token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`${name} is an Admin now`);
                }
            })
    };

    if (isLoading) {
        return <p>Loading ...</p>
    }

    return (
        <div className='mt-[55px]'>
            <p className='text-3xl font-bold mb-[25px] text-start'>Users</p>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete user</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><button disabled={user.role === 'admin'} onClick={() => handleMakeAdmin(user._id, user.name)} className='btn btn-xs btn-primary font-bold'>Make Admin</button></td>
                                <td><button className='btn btn-xs btn-accent font-bold'>Delete User</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;