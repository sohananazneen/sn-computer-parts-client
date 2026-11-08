import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl font-bold text-primary text-center'> Welcome to Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-50 bg-secondary text-base-content">
                    {/* <!-- Sidebar content here --> */}

                    <li><Link to="/dashboard">My Profile</Link></li>
                    {
                        !admin && <>
                            <li><Link to="/dashboard/myOrders">My Orders</Link></li>
                            <li><Link to="/dashboard/addReview">Add Reviews</Link></li>
                        </>}
                    {admin && <>
                        <li><Link to="/dashboard/manageOrders">Manage All Orders</Link></li>
                        <li><Link to="/dashboard/addProduct">Add a Product</Link></li>
                        <li><Link to="/dashboard/manageProducts">Manage Products</Link></li>
                        <li><Link to="/dashboard/allUsers">Make Admin</Link></li>
                    </>}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;