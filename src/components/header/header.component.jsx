import React from 'react';

import './header.component';
import {Link} from 'react-router-dom';

import { ReactComponent as Logo} from '../../assets/crown.svg';
import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <diV className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
        </diV>
    </div>
);
export default Header;