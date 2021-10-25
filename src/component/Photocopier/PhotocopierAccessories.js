import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite'

const PhotocopierAccessories = (props) => {
      const {key, img, name, model, availability, price, speed, resolutionOne,  copies, connectivity, copySpeed, paperSize, paperTray, printFeatured, resolution, scanFeatured} = props.photocopier
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
                                        <li>Speed: {speed}</li>
                                        <li>Resolution: {resolution}</li>
                                        <li>Maximum Copies: {    copies}</li>
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
                                                <td  className="name">Connectivity	
                                                </td><td className="value">{connectivity}</td>
                                            </tr>
                                            <tr>
                                                <td  className="name">Copy Speed	</td><td className="value">{copySpeed}<br />(Extra RAM slot available)</td>
                                            </tr>
                                            <tr>
                                                <td  className="name">paper size
                                                </td><td className="value">{paperSize}</td>
                                            </tr>
                                            <tr>
                                                <td  className="name">Paper tray	</td><td className="value">{paperTray}</td>
                                            </tr>
                                            <tr>
                                                <td  className="name">Print Featured		</td><td className="value">{printFeatured}</td>
                                            </tr>
                                            <tr>
                                                <td  className="name">Resolution
                                                </td><td className="value">{resolutionOne}</td>
                                            </tr>
                                            <tr>
                                                <td  className="name">Scan Featured			</td><td className="value">{scanFeatured}</td>
                                            </tr>           
                                            </tbody>
                                                                    
                                            </table>
                                    </div>
                                    
                                    <div className="description" id="description">
                                        <h2>Description :</h2>
                                        <div  itemprop="description"><h1>{name}
                                        </h1>
                                        <h6>Business copying performance without compromise</h6>

                                        <p>Put affordable MFP performance with exceptional value to work for your business.
                                        Help protect your investment and get affordable running costs, using Original HP toner cartridges.
                                        </p>

                                        <h6>Built-in networking and remote monitoring</h6>

                                        <p>Easily set up, print, and share printing resources with built-in Ethernet networking.
                                        Identify new devices and gain insight into printing with HP Web Jetadmin remote discovery and monitoring.
                                        </p>

                                        <h6>Set the pace with reliable A3 productivity</h6>

                                        <p>Capture both sides of the page with ease, using an optional 100-sheet reversing automatic document feeder
                                        Launch tasks at the device—streamline copying; capture a two-sided ID; and darken, enlarge, or reduce images.
                                        Create a one-sided copy of a two-sided ID—quickly capture the front and back on a single-sided page.
                                        Send scans directly from the MFP to your PC for simple filing and sharing.</p>
                                        </div>
                                    </div>
                            </div>
                            </div>
            </div>
        </div>
    );
};

export default PhotocopierAccessories;