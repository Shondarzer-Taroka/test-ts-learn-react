import React from 'react';
import { Link } from 'react-router-dom';

const NavsWithMouseHover = () => {
    return (
        <div>
            <nav>
                <div>
                    <li><Link to={'/'}>Home</Link></li>
                </div>
            </nav>
        </div>
    );
};

export default NavsWithMouseHover;