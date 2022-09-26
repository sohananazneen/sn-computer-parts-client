import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-3xl font-bold text-primary text-center'> Welcome to Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-50 bg-secondary text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Profile</Link></li>
                    <li><Link to="/dashboard/myOrders">My Orders</Link></li>
                    <li><Link to="/dashboard/addReview">Add Reviews</Link></li>
                    <li><Link to="/dashboard/manageOrders">Manage All Orders</Link></li>
                    <li><Link to="/dashboard/addTools">Add a Tools</Link></li>
                    <li><Link to="/dashboard/users">Make Admin</Link></li>
                    <li><Link to="/dashboard/manageTools">Manage Tools</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;