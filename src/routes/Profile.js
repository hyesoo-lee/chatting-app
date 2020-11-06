import React from 'react'
import Profileimg from '../images/empty.jpg';
import { Link } from 'react-router-dom';

import './Profile.css';

function Profile() {
    return (
        <div className="profile_page">
            <div className="profile_header">
                <div className="header_top">
                    <div className="header_1">
                        <span>00</span>:<span>00</span>
                    </div>
                    <div className="header_2">
                        <i className="fas fa-signal"></i>
                        <i className="fas fa-wifi"></i>
                        <i className="fas fa-battery-three-quarters"></i>
                    </div>
                </div>
            </div>
            <div className="profile_main">
                <div>
                    <span>
                        <Link to="/">
                            <i class="fas fa-times"></i>
                        </Link>
                    </span>
                    <ul>
                        <li><i className="fas fa-gift"></i></li>
                        <li><i class="fas fa-qrcode"></i></li>
                        <li><i class="fas fa-cog"></i></li>
                    </ul>
                </div>
                <section>
                    <img src={ Profileimg }></img>
                    <p>hyesoo Lee</p>
                </section>
                <ul>
                    <li><i class="fas fa-comment"></i><span>chatting <br />with me</span></li>
                    <li><i class="fas fa-user-edit"></i><span>profile edit</span></li>
                    <li><i class="fas fa-poo"></i><span>sns</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Profile;
