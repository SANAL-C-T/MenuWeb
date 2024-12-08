import React from 'react'
import { Navigate, Route } from "react-router-dom";

const Protected = ({ children }) => {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
        return <Navigate to="/Admin" />;
    }

    return children;
}

export default Protected