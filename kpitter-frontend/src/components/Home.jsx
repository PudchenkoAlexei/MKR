import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const isAuthenticated = localStorage.getItem('authToken') !== null;

    return (
        <div>
            <p>Feel free to browse posts or log in to create your own.</p>
            {!isAuthenticated && <p><Link to="/login">Login/Register</Link></p>}
            {isAuthenticated && <p><Link to="/profile">Go to Profile</Link></p>}
        </div>
    );
};

export default Home;
