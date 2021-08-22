import React from 'react';
import { Link } from 'react-router-dom';
import FilterByName from './FilterByName';

function Header() {
    return (
        <div className="header-brand">
            <Link to="/">
                <i className="fa fa-home header-home"></i>
            </Link>
            <div className="header-filter">
                {/* <FilterByName /> */}
            </div>

        </div>
    )
}

export default Header
