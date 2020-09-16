import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavItem.module.css';

const NavItem = (props) => {
    return (
        <div className={classes.Navitem}>
            <NavLink 
            to={props.linkto} exact
            activeClassName={classes.linkactive}
            >
            {props.children}</NavLink>
            
        </div>
    )
}

export default NavItem;