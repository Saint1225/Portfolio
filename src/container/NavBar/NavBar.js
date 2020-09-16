import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import NavItem from '../../component/NavItem/NavItem';
import classes from './NavBar.module.css';

class Navbar extends Component {

    render() {
        return (
            <nav className={classes.Navbar}>
                <h1>V</h1>
                <ul>
                    <li key='about'>
                        <NavItem linkto='/Portfolio/'>ABOUT</NavItem>
                    </li>
                    <li key='works'>
                        <NavItem linkto='/works'>WORKS</NavItem>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;