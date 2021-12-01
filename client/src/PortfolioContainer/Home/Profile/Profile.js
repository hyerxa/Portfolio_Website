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
                            <a href='https://www.linkedin.com/in/trharrington/'>
                                <i className='fa fa-linkedin-square'></i>
                            </a>
                            <a href='https://github.com/Tharrington86'>
                                <i className='fa fa-github-square'></i>
                            </a>
                            <a href='https://www.instagram.com/thomasryan86/'>
                                <i className='fa fa-instagram'></i>
                            </a>
                        </div>
                    </div>

                    <div className='profile-details-name'>
                        <span className='primay-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Thomas</span>
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
                                        "Rising Software Engineer",
                                        1000,
                                        "Design first, then code",
                                        1000,
                                        "Full Stack Web Developer",
                                        1000,
                                        "Trapshooting Champion",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                "When something is important enough, you do it even if the odds are not in your favor" - Elon Musk.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn' onClick={() => ScrollService.scrollHandler.scrollToContactMe()}>
                            {""}
                            Get in Touch
                        </button>
                        <a href='Thomas_Harrington_FGCU_Resume.pdf' download='Thomas_Harrington_Resume.pdf'>
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