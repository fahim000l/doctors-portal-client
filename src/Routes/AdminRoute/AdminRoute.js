import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import UseAdmin from '../../Hooks/UseAdmin';

const AdminRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();
    const [isAdmin, adminLoader] = UseAdmin(user?.email);

    if (loader || adminLoader) {
        return <p>Loading ...</p>
    }

    if (user?.uid && isAdmin) {
        return children
    }
    else {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }
};

export default AdminRoute;