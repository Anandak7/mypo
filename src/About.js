import {React,useState,useEffect} from 'react'
import './App.css';
import me from './me.png';
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
export const About = () => {
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },1000)
    },[])
    return (
        <>
        {loading ?
        <div class="d-flex justify-content-center align-self-center"  >
            <div class="spinner-grow m-5 text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div> 
        </div>
    :
    <div>
        <div className="display-6 text-center m-5 text-light" style={{fontWeight:'bold'}}>
        <Slide left cascade>
            About
        </Slide>
        </div>
        <div className="container text-light mt-5 bg-dark pt-5 rounded">
            <div className='row align-items-center justify-content-center'>
                    <Fade>
                    <div className="col-md-4 text-center mb-5">
                        <img src={me} class="img-fluid rounded-circle" alt="me"/>
                    </div>
                    </Fade>
                    <div className="col-md-6 p-4 m-2">
                    <Fade >
                    My name is Ananda Krishnan D.S.I am a hardworking and ambitious individual with a great passion for 
                    Computer science. I am currently in my third year of 
                    studying B.Tech at Mar Baselios College of Engineering and 
                    Technology, Trivandrum. I have good communication skills, enabling me to effectively communicate with a wide range of people. I am a detail-oriented person and can juggle between tasks.
                    I am more interested in Front end development. I realised that the field quite excites me.
                    Passionate about implementing new projects. I made this website using React, Bootstrap and other Javascript frameworks.
                    I am looking for an internship in the industry where I can put my knowledge into practice ultimately enhancing my skills and experience.
                    </Fade>
                    </div>
            </div> 
        </div>
        <div className="display-6 text-center m-5 text-light" style={{fontWeight:'bold'}}>
            <Slide left cascade>
                My Skills
            </Slide>
        </div>
            <Fade bottom>
                <div className="container text-light bg-dark p-4 rounded mb-2">
                    <div className='row align-items-center justify-content-center '>
                        <div class="col-md m-2">
                            <div className='row'>
                                <div className='col'>
                                    HTML
                                </div>
                                <div className='col'>
                                    <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                    <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                    <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                    <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                    <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md  m-2">
                            <div className='row'>
                                <div className='col'>
                                    CSS
                                </div>
                                <div className='col'>
                                    <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                    <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                    <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                    <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                    <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row align-items-center justify-content-center '>
                        <div class="col-md m-2">
                            <div className='row'>
                                <div className='col'>
                                    Javascript
                                </div>
                                <div className='col'>
                                <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                    <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                    <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md  m-2">
                            <div className='row'>
                                <div className='col'>
                                    C/C++
                                </div>
                                <div className='col'>
                                    <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                    <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                    <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                    <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                    <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row align-items-center justify-content-center '>
                        <div class="col-md m-2">
                            <div className='row'>
                                <div className='col'>
                                    Python
                                </div>
                                <div className='col'>
                                <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                    <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                    <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md  m-2">
                            <div className='row'>
                                <div className='col'>
                                    React
                                </div>
                                <div className='col'>
                                <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                    <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                    <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row align-items-center justify-content-center '>
                        <div class="col-md m-2">
                            <div className='row'>
                                <div className='col'>
                                    Bootstrap
                                </div>
                                <div className='col'>
                                <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                    <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                    <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                    <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md  m-2">
                            <div className='row'>
                                <div className='col'>
                                    Flutter
                                </div>
                                <div className='col'>
                                <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                    <FontAwesomeIcon icon={faStar} color="white" size="s" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
    </div>
        }
        </>
    )
}
