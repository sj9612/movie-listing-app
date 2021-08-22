import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header-brand">
            <Link to="/">
                <i className="fa fa-home header-home"></i>
            </Link>
        </div>
    )
}

export default Header
