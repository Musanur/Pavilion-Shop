import React from 'react';
import './Header.css';
import './HeaderMedia.css'
import logo from "../../img/logo.png";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
          <div className="header_bg">
            <div className="header_top container">
                <Link to="/"><img className="header_logo" src={logo} alt="" /></Link>
                <div className="header_search">
                    <input className="header_searchInput" type="text" />
                    <div className="header_searchText">
                        <span>Scearch</span>
                        </div>
                        <SearchIcon className="header_searchIcon" />
                </div>
                <div className="header_nav">
                    <div className="header_option">
                        <span className="header_optionOne">
                        <ShoppingCartIcon />
                        </span>
                        <span className="header_optionTwo">
                        <span className="header_optionBasketCount">(0)</span>
                            item's
                        </span>
                    </div>
                    <div className="header_option">
                        <span className="header_optionOne">
                        <LoginIcon />
                        </span>
                        <span className="header_optionTwo">
                            Login
                        </span>
                    </div>
                </div>
            </div>
          </div>

          <div className="header_mainNav">
                <div className="header_main">
                    <div className="container">
                        <Link to="/laptop">LAPTOP</Link>
                        <Link to="/desktop">DESKTOP</Link>
                        <Link to="/all-in-one">ALL IN ONE</Link>
                        <Link to="/monitor">MONITOR</Link>
                        <Link to="/server">SERVER</Link>
                        <Link to="/workstatiOn">WORKSTATION</Link>
                        <Link to="/printer">PRINTER</Link>
                        <Link to="/ink-toner">INK TONER</Link>
                        <Link to="/photocopier">PHOTOCOPIER</Link>
                        <Link to="/accessories">ACCESSORIES</Link>
                    </div>
                </div>
          </div>

          <div className="header_offCanvas">
                 <nav class="navbar navbar-light d-lg-none fixed-top menu-offcanvas">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                            aria-controls="offcanvasNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header">
                                <Link to="/">
                                <img src={logo} class="offcanvas-title" id="offcanvasNavbarLabel" alt="" /> 
                                </Link>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li class="nav-item m-2 main-nav">
                                        <Link class="nav-link active text-white" aria-current="page"
                                            to="/laptop">LAPTOP</Link>
                                    </li>
            
                                    <li class="nav-item my-2 mx-1 main-nav">
                                        <Link class="nav-link active text-white" aria-current="page"
                                            to="/desktop">DESKTOP</Link>
                                    </li>
            
                                    <li class="nav-item my-2 mx-1 main-nav">
                                        <Link class="nav-link active text-white" aria-current="page" to="/all-in-one">ALL IN ONE</Link>
                                    </li>
            
                                    <li class="nav-item m-2 main-nav">
                                        <Link class="nav-link active text-white" aria-current="page" to="/monitor">MONITOR</Link>
                                    </li>
            
                                    <li class="nav-item m-2 main-nav">
                                        <Link class="nav-link active text-white" aria-current="page" to="/server">SERVER</Link>
                                    </li>
            
                                    <li class="nav-item m-2 main-nav">
                                        <Link class="nav-link active text-white" aria-current="page" to="/workstation">WORKSTATION</Link>
                                    </li>
            
                                    <li class="nav-item m-2 main-nav">
                                        <Link class="nav-link active text-white" aria-current="page" to="/printer">PRINTERS</Link>
                                    </li>
            
                                    <li class="nav-item m-2 main-nav">
                                        <Link class="nav-link active text-white" aria-current="page" to="/ink-toner">INK TONER</Link>
                                    </li>
            
                                    <li class="nav-item m-2 main-nav">
                                        <Link class="nav-link active text-white" aria-current="page" to="/Photocopier">PHOTOCOPIER</Link>
                                    </li>
            
                                    <li class="nav-item m-2 main-nav">
                                        <Link class="nav-link active text-white" aria-current="page" to="/Accessories">ACCESSORIES</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
          </div>
        </div>

        
    );
};

export default Header;