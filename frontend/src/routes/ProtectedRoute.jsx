/* eslint-disable react/prop-types */
import React from 'react';
import { useContext } from 'react';
import { authContext } from '../context/authContext';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({children,allowedRoles}) {
    const {token,role} = useContext(authContext);

    const isAllowed = allowedRoles.includes(role);
    const accessibleRoute = token && isAllowed?children:<Navigate to="/login" replace={true} />

  return accessibleRoute
}

export default ProtectedRoute;