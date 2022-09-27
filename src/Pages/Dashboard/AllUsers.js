import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AllUserTable from './AllUserTable';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://stormy-river-80261.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-8 mx-8'>
            <h2 className='text-secondary text-xl text-center my-4'>All Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full border">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>E-mail</th>
                            <th>Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <AllUserTable
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></AllUserTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;