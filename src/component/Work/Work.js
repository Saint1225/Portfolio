import React from 'react';

import classes from './Work.module.css';



const Work = (props) =>{
    return (
        <div className={classes.Work}>
            <img src={props.img}></img>            
            <a href={props.link} target='_blank'><div className={classes.container}>
                <h1>{props.title}</h1>
            </div></a>
            <p>{props.detail}</p>

        </div>
    )
}

export default Work;