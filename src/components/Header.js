import React from 'react';
import { Link } from 'react-router'
import './../App.css';

const Header  = () => {
    return (
        <div>
            <Link to='/'>Home</Link>&nbsp;
            <Link to='/address'>Address</Link>
            <Link to='/dress'>dress</Link>
        </div>
    );
}

export default Header;