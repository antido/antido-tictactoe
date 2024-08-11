import React from 'react';
import { Link } from 'react-router-dom';

const NoPage = () => {
    
    return (
        <div className="not-found-page text-center">
            <h1 className="display-3 mb-5">Site Page Not Found</h1>
            <Link 
                to="/" 
                style={{ textDecoration: 'none' }} 
                className="fw-bold text-primary"
            >
                Go back home
            </Link>
        </div>
    )
}

export default NoPage;