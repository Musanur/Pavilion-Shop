import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 ">
                            <h6>Shop Address</h6>
                            <div className="shop-add-inner d-flex align-items-center">
                                <i className="fas fa-map-marker-alt"></i>
                                <p>Shop-975, 976, Level-09 Multiplan Center
                                    New Elephant Road, Dhaka - 1205</p>
                            </div>
                            <div className="shop-add-inner d-flex align-items-center">
                                <i className="fas fa-phone"></i>
                                <p>
                                <a href="tel: 01404767093">Laptop: 01709995418, 01313717095</a>
                                <br/>
                                    <a href="tel: 01404767093">Printer: 01713651652</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <h6>HP Authorized Service Center</h6>
                            <div className="shop-add-inner d-flex align-items-center">
                                <i className="fas fa-map-marker-alt"></i>
                                <p>Level-13, Multiplan Center, New Elephant Road,
                                    Dhaka-1205</p>
                            </div>
                            <div className="shop-add-inner d-flex align-items-center">
                                <i className="fas fa-phone"></i>
                                <p><a href="tel: 01404767093">+8801709995535</a></p><br/>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <h6>Stay with us</h6>
                            <div className="shop-add-inner d-flex align-items-center">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-instagram"></i>
                            </div>
                        </div>
                    </div>
                    
                    <div className="footer-nav flex-wrap">
                        <ul className="nav justify-content-center ">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Online Support Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Delivery Information</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Privacy Policy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Terms & Conditions</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Career</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="copy text-center text-white">
                        <p>HP Exclusive Shop Bangladesh © 2021 <br/>
                        Powered By <a href="#">Star Soft</a></p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;