import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import UseAdmin from '../../Hooks/UseAdmin';
import Header from '../../Pages/Shared/Header/Header';

const DashBoardLayOut = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = UseAdmin(user?.email);

    console.log(isAdmin);

    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to={'/dashboard'}>My Appointments</Link></li>
                        {
                            isAdmin &&
                            <>
                                <li><Link to={'/dashboard/users'}>Users</Link></li>
                                <li><Link to={'/dashboard/adddoctor'}>Add Doctor</Link></li>
                                <li><Link to={'/dashboard/managedoctors'}>Manage Doctors</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayOut;