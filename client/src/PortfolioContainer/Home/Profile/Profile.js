import React from 'react';
import Typical from 'react-typical';
import "./Profile.css";

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://linkedin.com/in/haley-yerxa'>
                                <i className='fa fa-linkedin-square'></i>
                            </a>
                            <a href='https://github.com/hyerxa'>
                                <i className='fa fa-github-square'></i>
                            </a>
                            <a href='https://www.instagram.com/haleyyerxa/'>
                                <i className='fa fa-instagram'></i>
                            </a>
                        </div>
                    </div>

                    <div className='profile-details-name'>
                        <span className='primay-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Haley</span>
                        </span>
                    </div>

                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Budding Software Engineer",
                                        1000,
                                        "NCAA Division 1 Golfer",
                                        1000,
                                        "Full Stack Web Developer",
                                        1000,
                                        "Machine Learning Enthusiast",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                A passion for building applications that help make lives better.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Get in Touch
                        </button>
                        <a href='Haley_Yerxa_FGCU_Resume.pdf' download='Haley_Yerxa_Resume.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
        </div>
    )
}