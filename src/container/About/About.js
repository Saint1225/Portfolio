import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal/Fade';

import classes from './About.module.css';
import Selfie from '../../assets/image/Vincent.png';
import Skills from '../../component/Skills/Skills';
import ContactIcon from '../../component/ContactIcon/ContactIcon';

const About = () => {
    return (
        <div>
            <div className={classes.About}>
                <div className={classes.intro}>
                    <h1>VINCENT</h1>
                    <h2>PORTFOLIO</h2>
                    <hr />
                    <p>Front-end developer</p>
                    <p>Experienced with HTML/CSS/Javascript/React.js</p>
                    <div className={classes.resume}>
                        <a 
                        href='https://www.cakeresume.com/vincent-li-41f887' 
                        target='_blank'>Resume</a></div>
                </div>
            </div>
            <div className={classes.Skills}>
                <Fade up>
                    <h2>SKILL</h2>
                    <hr />
                    <Skills icon='react' percent='95%'></Skills>
                    <Skills icon='js-square' percent='90%'></Skills>
                    <Skills icon='node' percent='80%'></Skills>
                    <Skills icon='html5' percent='80%'></Skills>
                    <Skills icon='css3' percent='80%'></Skills>
                </Fade>
            </div>
            <div className={classes.Contact}>
                <Fade up>
                    <h2>CONTACT</h2>
                    <hr />
                    <img src={Selfie} className={classes.selfie}></img>
                    <h3>Vincent</h3>
                    <p className={classes.mail}>
                        <FontAwesomeIcon icon={['far', 'paper-plane']} size="xs"></FontAwesomeIcon>
                        <span className={classes.mailaddress}>vincent-valentine1225@hotmail.com</span>
                    </p>
                    <div className={classes.icon}>
                        <ContactIcon icon='linkedin' linkto='https://www.linkedin.com/in/wei-sheng-li-30aba3a0/'></ContactIcon>
                        <ContactIcon icon='github' linkto='https://github.com/Saint1225'></ContactIcon>
                    </div>
                </Fade>
            </div>
            <div className={classes.footer}></div>
        </div>

    )
}

export default About;