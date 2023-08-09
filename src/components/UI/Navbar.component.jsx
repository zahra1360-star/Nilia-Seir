import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
//import { PiAirplaneBold } from 'react-icons/pi';
import './navbar.css';
import logoImg from '../../assets/images/nilia-icon.png';



const NavbarComponent = () => {
    const btnToggleRef = useRef();
    const toggleMenu = () => {
        btnToggleRef.current.click();
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary  border-bottom ">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        
                        <li className="nav-item" onClick={toggleMenu}>
                            <Link className="nav-link active" to="/login">ورود به سیستم</Link>
                        </li>
                        <li className="nav-item" onClick={toggleMenu}>

                            <Link className="nav-link active" to="/contac-us"> تماس با ما </Link>
                        </li>
                        {/* <li className="nav-item" onClick={toggleMenu}>
                        
                            <Link className="nav-link active" to="/"> خانه </Link>
                           
                        </li> */}

                    </ul>
                </div>
                <div>
                    {/* <span className='navba-logo-text'>نیلیا سیر</span> */}
                    {/* <PiAirplaneBold className='navbar-logo' /> */}
                    <Link className="nav-link active" to="/"> 
                    <img src={logoImg} className='img-fluid' alt="" />
                    </Link>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    ref={btnToggleRef}>
                    <span className="navbar-toggler-icon"></span>
                </button>

            </div>
        </nav>
    );
};

export default NavbarComponent;