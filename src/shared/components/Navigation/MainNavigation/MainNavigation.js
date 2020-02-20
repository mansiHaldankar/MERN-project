import React from 'react';
import { Link } from 'react-router-dom';

import NavLinks from '../NavLinks/NavLinks';
import MainHeader from '../MainHeader/MainHeader';
import SideDrawers from '../SideDrawers/SideDrawers';
import './MainNavigation.css';


const MainNavigation = (props) => {
    return (
        <React.Fragment>
            <SideDrawers className = 'main-navigation__drawer-nav'>
                <NavLinks/>
            </SideDrawers>
            <MainHeader>
                <button className = 'main-navigation__menu-btn'>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className = 'main-navigation__title'>
                    New Places
                    <Link to ="/"></Link>
                </h1>
                <nav className = 'main-navigation__header-nav'>
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    );
}

export default MainNavigation;