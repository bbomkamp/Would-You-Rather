import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div>
        <h1> 404 - Requested Page Not Found! </h1>
        <h2>Something Went Wrong</h2>

        <Link to="/">Click Here To Return To Home Page</Link>
    </div>

);

export default NotFound;