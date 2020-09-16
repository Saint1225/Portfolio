import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import classes from './ContactIcon.module.css';

const ContactIcon = (props) =>{
    return (
        <div className={classes.icon}>
            <a href={props.linkto} target='_blank'>
                <FontAwesomeIcon icon={['fab', props.icon]} size="lg"></FontAwesomeIcon>
            </a>
        </div>
    )
}

export default ContactIcon;