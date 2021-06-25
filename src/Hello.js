import React from 'react'
import './App.css';
import Fade from 'react-reveal/Fade';
export const Hello = () => {
    return (
        
        <div className="text-center lol">
            <Fade top cascade><h1 className="display-1" style={{whiteSpace:'nowrap',fontWeight:'bold'}}>Hello, I am Ananda.</h1></Fade>
            <Fade left cascade><p className="display-6" >Front-end Developer</p> </Fade>
        </div>
       
    )
}
