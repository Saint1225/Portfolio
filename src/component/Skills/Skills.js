import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal/Fade';

import classes from './Skills.module.css';


const Skills = (props) =>{
    return (
        <div  className={classes.Skills}>
            <div className={classes.icon}>
                <FontAwesomeIcon icon={['fab', props.icon]} size="5x"/>        
            </div>
            <div className={classes.bar}>
                <Fade left>
                    <div className={classes.skillbar} style={{width: props.percent}}></div>
                </Fade>
            </div>
        </div>
    );
}

export default Skills;