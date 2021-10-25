import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite'

const MonitorAccessories = (props) => {
    const {key, img, name, model, availability, display, time, price, screenSize, contrastRatio, responseTime, resolution, connectivity, warranty, dimension, weight} = props.monitor
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
                                        <li>{display}</li>
                                        <li>{time}</li>
                                    </ul>
                                    <a href="#specification">View More Info</a>
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
                                        <li data-area="specification">Specification</li>
                                        <li data-area="description"><a  href="#description">Description</a></li>
                                    </ul>

                                    <div  className="specification-tab" id="specification">
                                        <h3 className="section-head">Specification:</h3>
                                        <table className="data-table" cellpadding="0" cellspacing="0">
                                            <colgroup>
                                                <col className="name"/>
                                                <col className="value"/>
                                            </colgroup>
                                            <thead>
                                            <tr>
                                                <td className="heading-row" colspan="3">Laptop</td>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td  className="name">Screen Size</td><td className="value">{screenSize}</td>
                                            </tr>
                                            <tr>
                                                <td  className="name">Contrast Ratio</td><td className="value">{contrastRatio}<br />(Extra RAM slot available)</td>
                                            </tr>
                                            <tr>
                                                <td  className="name">Response Time</td><td className="value">{responseTime}</td>
                                            </tr>
                                            <tr>
                                                <td  className="name">Resolution</td><td className="value">{resolution}</td>
                                            </tr>
                                            <tr>
                                                <td  className="name">Connectivity</td><td className="value">{connectivity}</td>
                                            </tr>
                                            <tr>
                                                <td  className="name">Warranty</td><td className="value">{warranty}</td>
                                            </tr>
                                            <tr>
                                                <td  className="name">Dimension	</td><td className="value">{dimension}</td>
                                            </tr>
                                            <tr>
                                                <td  className="name">Weight</td><td className="value">{weight}</td>
                                            </tr>                      
                                            </tbody>
                                                                    
                                            </table>
                                    </div>
                                    
                                    <div className="description" id="description">
                                        <h2>Description :</h2>
                                        <div  itemprop="description"><h1>{name}</h1><p>{name} The unforgettable quality of this stunning FHD display will blow your mind. It has dual HDMI ports which give you more options and more devices connected to the big screen. The anti-glare panel lets you enjoy the sun and your favorite content with this anti-glare panel. Non-reflective and low gloss means you'll get less glare while you're outside. It uses the low blue light mode to put less strain on your eyes. Enjoy vibrant detail from practically any position with consistent color and image clarity maintained across ultra-wide 178° horizontal and vertical viewing angles. IPS technology ensures image accuracy and consistency across the ultra-wide viewing spectrum. No matter where you stand, an HP IPS monitor delivers clear, vivid images. Adjust the screen to your personal preference with a 5° forward or 25° backward tilt. Videos and games come to life with less stutter or blur for more realistic play with smooth 5 milliseconds gray-to-gray response time. ee and feel the difference of fluid, responsive gameplay. By synchronizing the refresh rate with your GPU, AMD FreeSync makes display stutter, input lag, and screen tears ancient history. Amazing clarity is delivered by 10,000,000:1 Dynamic Contrast Ratio for deeper blacks, brighter whites, and crisper colors. It has an aspect ratio of 16:9 and the panel is flat with 300 nits brightness. The display features Anti-glare, Anti-static, In-plane switching, Language selection, LED backlights, On-screen controls, Plug and Play, User programmable, AMD FreeSync. It has a warranty of 3 years.</p></div>
                                    </div>
                            </div>
                            </div>
            </div>
        </div>
    );
};

export default MonitorAccessories;