import React from 'react';
import Typical from 'react-typical';
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://www.linkedin.com/in/alexandra-salas-/'>
                                <i className='fa fa-linkedin-square'></i>
                            </a>
                            <a href='https://github.com/aesalas'>
                                <i className='fa fa-github-square'></i>
                            </a>
                        </div>
                    </div>

                    <div className='profile-details-name'>
                        <span className='primay-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Alex</span>
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
                                        "Aspiring Software engineer",
                                        1000,
                                        "Full stack developer",
                                        1000,
                                        "Problem solver",
                                        1000,
                                        "Digital designer",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Passionate about creating innovative, creative, and purposeful solutions. I build things to make a difference.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn' onClick={() => ScrollService.scrollHandler.scrollToContactMe()}>
                            {""}
                            Get in Touch
                        </button>
                        <a href='Alexandra_Salas_FGCU_Resume.pdf' download='Alexandra_Salas_Resume.pdf'>
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