import React from 'react';
import './Header.css';
import './HeaderMedia.css'
import logo from "../../img/logo.png";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';

const Header = () => {
    return (
        <div className="header">
          <div className="header_bg">
            <div className="header_top container">
                <a href="/"><img className="header_logo" src={logo} alt="" /></a>
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
                        <a href="/laptop">LAPTOP</a>
                        <a href="/desktop">DESKTOP</a>
                        <a href="/all-in-one">ALL IN ONE</a>
                        <a href="/monitor">MONITOR</a>
                        <a href="/server">SERVER</a>
                        <a href="/workstatiOn">WORKSTATION</a>
                        <a href="/printer">PRINTER</a>
                        <a href="/ink-toner">INK TONER</a>
                        <a href="/photocopier">PHOTOCOPIER</a>
                        <a href="/accessories">ACCESSORIES</a>
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
                                <a href="/public/index.html">
                                <img src={logo} class="offcanvas-title" id="offcanvasNavbarLabel" alt="" /> 
                                </a>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li class="nav-item m-2 main-nav">
                                        <a class="nav-link active text-white" aria-current="page"
                                            href="/laptop">LAPTOP</a>
                                    </li>
            
                                    <li class="nav-item my-2 mx-1 main-nav">
                                        <a class="nav-link active text-white" aria-current="page"
                                            href="/desktop">DESKTOP</a>
                                    </li>
            
                                    <li class="nav-item my-2 mx-1 main-nav">
                                        <a class="nav-link active text-white" aria-current="page" href="/all-in-one">ALL IN ONE</a>
                                    </li>
            
                                    <li class="nav-item m-2 main-nav">
                                        <a class="nav-link active text-white" aria-current="page" href="/monitor">MONITOR</a>
                                    </li>
            
                                    <li class="nav-item m-2 main-nav">
                                        <a class="nav-link active text-white" aria-current="page" href="/server">SERVER</a>
                                    </li>
            
                                    <li class="nav-item m-2 main-nav">
                                        <a class="nav-link active text-white" aria-current="page" href="/workstation">WORKSTATION</a>
                                    </li>
            
                                    <li class="nav-item m-2 main-nav">
                                        <a class="nav-link active text-white" aria-current="page" href="/printer">PRINTERS</a>
                                    </li>
            
                                    <li class="nav-item m-2 main-nav">
                                        <a class="nav-link active text-white" aria-current="page" href="/ink-toner">INK TONER</a>
                                    </li>
            
                                    <li class="nav-item m-2 main-nav">
                                        <a class="nav-link active text-white" aria-current="page" href="/Photocopier">PHOTOCOPIER</a>
                                    </li>
            
                                    <li class="nav-item m-2 main-nav">
                                        <a class="nav-link active text-white" aria-current="page" href="/Accessories">ACCESSORIES</a>
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