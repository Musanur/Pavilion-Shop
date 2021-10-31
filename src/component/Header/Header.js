import React from 'react';
import './Header.css';
import './HeaderMedia.css'
import logo from "../../img/logo.png";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
          <div className="header_bg">
            <div className="header_top container">
                <NavLink to="/"><img className="header_logo" src={logo} alt="" /></NavLink>
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
                        <NavLink to="/laptop">LAPTOP</NavLink>
                        <NavLink to="/desktop">DESKTOP</NavLink>
                        <NavLink to="/all-in-one">ALL IN ONE</NavLink>
                        <NavLink to="/monitor">MONITOR</NavLink>
                        <NavLink to="/server">SERVER</NavLink>
                        <NavLink to="/workstatiOn">WORKSTATION</NavLink>
                        <NavLink to="/printer">PRINTER</NavLink>
                        <NavLink to="/ink-toner">INK TONER</NavLink>
                        <NavLink to="/photocopier">PHOTOCOPIER</NavLink>
                        <NavLink to="/accessories">ACCESSORIES</NavLink>
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
                                <NavLink to="/">
                                <img src={logo} class="offcanvas-title" id="offcanvasNavbarLabel" alt="" /> 
                                </NavLink>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li class="nav-item m-2 main-nav">
                                        <NavLink class="nav-link active text-white" aria-current="page"
                                            to="/laptop">LAPTOP</NavLink>
                                    </li>
            
                                    <li class="nav-item my-2 mx-1 main-nav">
                                        <NavLink class="nav-link active text-white" aria-current="page"
                                            to="/desktop">DESKTOP</NavLink>
                                    </li>
            
                                    <li class="nav-item my-2 mx-1 main-nav">
                                        <NavLink class="nav-link active text-white" aria-current="page" to="/all-in-one">ALL IN ONE</NavLink>
                                    </li>
            
                                    <li class="nav-item m-2 main-nav">
                                        <NavLink class="nav-link active text-white" aria-current="page" to="/monitor">MONITOR</NavLink>
                                    </li>
            
                                    <li class="nav-item m-2 main-nav">
                                        <NavLink class="nav-link active text-white" aria-current="page" to="/server">SERVER</NavLink>
                                    </li>
            
                                    <li class="nav-item m-2 main-nav">
                                        <NavLink class="nav-link active text-white" aria-current="page" to="/workstation">WORKSTATION</NavLink>
                                    </li>
            
                                    <li class="nav-item m-2 main-nav">
                                        <NavLink class="nav-link active text-white" aria-current="page" to="/printer">PRINTERS</NavLink>
                                    </li>
            
                                    <li class="nav-item m-2 main-nav">
                                        <NavLink class="nav-link active text-white" aria-current="page" to="/ink-toner">INK TONER</NavLink>
                                    </li>
            
                                    <li class="nav-item m-2 main-nav">
                                        <NavLink class="nav-link active text-white" aria-current="page" to="/Photocopier">PHOTOCOPIER</NavLink>
                                    </li>
            
                                    <li class="nav-item m-2 main-nav">
                                        <NavLink class="nav-link active text-white" aria-current="page" to="/Accessories">ACCESSORIES</NavLink>
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