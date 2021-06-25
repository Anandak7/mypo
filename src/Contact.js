import React from 'react'
import './App.css';
import git from './github.svg';
import lin from './linkedin.svg';
import at from './at-sign.svg';
import ph from './phone.svg';
import emailjs from 'emailjs-com';
import Fade from 'react-reveal/Fade';
export const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
        if(e.target.email.value === ''){
            alert('Please enter an email');
        }
        else if(e.target.name.value === ''){
            alert('Please enter a name');
        }
        else if(e.target.message.value ===''){
            alert('Please enter a messsage')
        }
        else if(e.target.email.value !== '' && e.target.name.value!=='' && e.target.message.value!==''){
        emailjs.sendForm('service_58ylkcu', 'template_xrayzjn', e.target, 'user_iTi1v9fqjl2Na3EOXC3S2')
          .then((result) => {
              console.log(result.text);
              alert('Message send Successfully!')
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
        }
      }
    return (
        <>
        <Fade top>
            <div className="display-6 text-center m-5 text-light" style={{fontWeight:'bold'}}>
                Contact Me
            </div>
        </Fade>
        <div className="container text-light">
            <div className="row justify-content-between">
            <Fade>
                <div className="col-md-4 pt-4">
                    <div className="row fs-3">
                        <div className="col my-2">
                            <div className="row">
                                <div className="col-2">
                                    <img src={at} alt="logo" style={{filter:'invert(100%)'}}/>
                                </div>
                                <div className="col-4">
                                    anandakrishnan710@gmail.com
                                </div>
                            </div>
                        </div>
                        <div className="col-12 my-2">
                            <div className="row">
                                <div className="col-2">
                                    <img src={lin} alt="logo" style={{filter:'invert(100%)'}}/>
                                </div>
                                <div className="col-4">
                                    <a style={{textDecoration:'none',color:'white'}} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ananda-krishnan-d-s-513974198/">linkedin.com/anandakrishnan</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 my-2">
                            <div className="row">
                                <div className="col-2">
                                    <img src={git} alt="logo" style={{filter:'invert(100%)'}}/> 
                                </div>
                                <div className="col-4">
                                    https://github.com/Anandak7
                                </div>
                            </div>
                        </div>
                        <div className="col-12 my-2">
                            <div className="row">
                                <div className="col-2">
                                    <img src={ph} alt="logo" style={{filter:'invert(100%)'}}/> 
                                </div>
                                <div className="col-4">
                                    +91&nbsp;9650301567
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Fade>
                <div className="col-1 border-end border-white d-md-none d-lg-block" ></div>
            <Fade>
                <form onSubmit={sendEmail} className="col-md-4  text-dark text-center pt-4">
                    <div className="form-floating mb-3">
                    <input type="email" class="form-control " id="floatingInput" placeholder="name@example.com" name="email"/>
                    <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="john" name="name"/>
                    <label for="floatingInput">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" name="message" style={{height: "100px"}}></textarea>
                    <label for="floatingTextarea">Comments</label>
                    </div>
                    <div class="col-12 ">
                        <button type="submit" class="btn btn-primary">Send</button>
                    </div>
                </form>
            </Fade>
            </div>
        </div>
        </>
    )
}
