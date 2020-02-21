import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import NavLinks from '../NavLinks/NavLinks';
import MainHeader from '../MainHeader/MainHeader';
import SideDrawers from '../SideDrawers/SideDrawers';
import Backdrop from '../../UIElements/Backdrop/Backdrop';
import './MainNavigation.css';


const MainNavigation = (props) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawer = () => {
        setDrawerIsOpen(true);
    }

    const closeDrawer = () => {
        setDrawerIsOpen(false);
    }
    return (
        <React.Fragment>
            {drawerIsOpen && <Backdrop onClick = { closeDrawer }/> }
            <SideDrawers className = 'main-navigation__drawer-nav' show = {drawerIsOpen} onClick = {closeDrawer}>
                <NavLinks/>
            </SideDrawers>
            <MainHeader>
                <button className = 'main-navigation__menu-btn' onClick = { openDrawer }>
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