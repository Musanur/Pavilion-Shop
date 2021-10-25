import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite'

const AccessoriesAll = (props) => {
      const {key, img, name, model, availability, price, power, protable, usb, description} = props.accessories
    return (
        <div>
              <div className="container Laptop_Accessories">
                <div className="home-banners m-top-20 after-header">
                    <div className="container">
                        <div id="collage-1" className="collage row">
                            <div className="col-xl-6 banner-slider p-3">
                                <div className="item item banner-image accessories p-3 text-center">
                                   <img src={img} alt="" className="img-fluid w-75" />
                                </div>
                            </div>
                            <div className=" col-xl-6 p-3 ">
                                <div className="accessories  p-5">
                                    <h4>{name}</h4>
                                    <p><span><b>Model:</b></span> {model}</p>
                                    <p><span><b>Availability:</b></span> {availability}</p>
                                    <h6><b>Quick Overview</b></h6>
                                    <ul>
                                        <li>{power}</li>
                                        <li>{protable}</li>
                                        <li>{usb}</li>
                                    </ul>
                                    <a href="#description">View More Info</a>
                                    <h4>{price}<span className="Price_icon">৳</span></h4>
                                    <span className="dicountPrice">Cash Discount Price</span>
                                    <div className="row buy_area  d-flex align-items-center">
                                        <div className="col-sm-2 col-6 py-2 padding"><b>Quantity:</b></div>
                                        <div className="col-sm-3 col-6 py-2 padding">
                                            <div className="quantity">
                                                <input id="input-quantity" value="1" size="2"  maxlength="12" className="quantityInput" type="text" />
                                                <span className="quantity_increment">+</span>
                                                <span className="quantity_decrement">-</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 col-4  py-2 padding">
                                            <button id="button-cart" className="card-btn" data-loading-text="Loading...">Buy Now</button>
                                        </div>
                                        <div className="col-sm-1 col-2  py-2 padding icon"><FavoriteIcon sx={{ fontSize: 20 }}/></div>
                                    </div>
                                    <div className="share-links social-links share-on">
                                        <span className="share"><b>Share:</b></span>
                                        <span className="share-ico fab fa-facebook-f" data-type="facebook"></span>
                                        <span className="share-ico fab fa-twitter" data-type="twitter"></span>
                                        <span className="share-ico fab fa-linkedin-in" data-type="linkedin"></span>
                                        <span className="share-ico fab fa-pinterest" data-type="pinterest"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                            <div className="row">
                                <div className="col-lg-9 col-md-12 specification_Main">
                                    <ul className="nav-tab-bars">
                                        <li data-area="description"><a  href="#description">Description</a></li>
                                    </ul>
                                    
                                    <div className="description" id="description">
                                        <h2>Description :</h2>
                                        <div  itemprop="description"><h1>{name}</h1><p>{description}</p></div>
                                    </div>
                            </div>
                            </div>
            </div>
        </div>
    );
};

export default AccessoriesAll;