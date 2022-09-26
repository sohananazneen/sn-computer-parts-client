import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    const handleProfile = event => {
        event.preventDefault();
        const user = {
            email: user.email,
            user: user.name,
            education: event.target.address.value,
            location: event.target.address.value,
            LinkedIn: event.target.address.value,
            phone: event.target.phone.value
        }

        fetch(`http://localhost:5000/user`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your Profile Updated');
                    event.target.reset();
                }
            })
    }
    return (
        <div >
            <h2 className="text-secondary text-xl text-center my-4">Add Review</h2>
            <div className='flex justify-center m-10'>
                <form onSubmit={handleProfile} className='shadow-md shadow-indigo-500/50 p-10 border'>
                    <div className="form-control w-96 max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="name" className="input input-bordered w-full max-w-xs" value={user?.displayName} readOnly disabled
                        />
                        <label className="label">
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email" className="input input-bordered w-full max-w-xs" value={user?.email} readOnly disabled
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Education</span>
                        </label>
                        <input
                            type="text" className="input input-bordered w-full max-w-xs" name="education" placeholder='Education'
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input
                            type="text" className="input input-bordered w-full max-w-xs" name="location" placeholder='Location'
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">LinkedIn Profile Link</span>
                        </label>
                        <input
                            type="text" className="input input-bordered w-full max-w-xs" name="LinkedIn" placeholder='LinkedIn Profile Link'
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input
                            type="text" className="input input-bordered w-full max-w-xs" name="phone" placeholder='Phone Number'
                        />
                    </div>

                    <input className='btn btn-primary w-full max-w-xs my-4 text-white' type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default MyProfile;