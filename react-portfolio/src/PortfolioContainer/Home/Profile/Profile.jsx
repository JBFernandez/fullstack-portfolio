import React from 'react';
import Typical from 'react-typical';
import ScrollService from '../../../utilities/ScrollService';
import './profile.css';



export const Profile = () => {
  return (

    <div className='profile-container' >
        <div className='profile-parent' >
            <div className='profile-details' >
                <div className='colz' >
                    <div className='colz-icon' >
{/* modificar iconos de face, insta etc */}
                        <a href="https://www.facebook.com/coco.fernandez.330">
                            <i className='fa fa-facebook-square' ></i>
                        </a>
                        
                        <a href="">
                            <i className='fa fa-google-plus-square' ></i>
                        </a>
                        
                        <a href="">
                            <i className='fa fa-instagram' ></i>
                        </a>
                        
                        <a href="">
                            <i className='fa fa-youtube-square' ></i>
                        </a>

                        <a href="">
                            <i className='fa fa-twitter' ></i>
                        </a>

                    </div>
                </div>            

            <div className='profile-details-name' >
                <span className='primary-text' >
                    { "" }
                    HELLO, I'M <span className='highlighted-text' > JOSE </span>
                </span>
            </div>
                <div className='profile-details-role' >
                    <span className='primary-yext' >
                        { "" }
                        <h1>
                            {" "}
                            <Typical
                            loop={ Infinity }
                            steps={[
                                "Passionate Developer ❤️ ",
                                1000,
                                "Full Stack Developer 💻 ",
                                1000,
                                "Problem Solver 🧠 ",
                                1000,
                                "JS, React, Java Developer 😎 ",
                                1000,
                                "Crypto Enthusiast 🌐 ",
                                1000,
                            ]}                            
                            />
                        </h1>
                        <span className='profile-role-tagline' >
                            Knack of building applications with front and back end operations.
                        </span>
                    </span>
                </div>
                <div className='profile-options' >
                    <button 
                        className='btn primary-btn'
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                    >
                        {""}
                        Hire Me{" "}
                    </button>
                    <a href="JoseBernardoCV.pdf" download="joseCV.pdf" >
                        <button className='btn highlighted-btn' > Get Resume </button>
                    </a>
                </div>
            </div>
            <div className='profile-picture' >
                <div className='profile-picture-background' >

                </div>
            </div>
        </div>
    </div>
  );
}
