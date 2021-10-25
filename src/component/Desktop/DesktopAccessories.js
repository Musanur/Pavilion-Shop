import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite'

const DesktopAccessories = (props) => {
   const {key, img, name, price, model, availability, processor, memory, hardDisk, motherBoard, monitor, graphics, lan, audio, drive, mouse, oparating, keyboard, warranty} = props.desktop
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
                                        <li>{processor}</li>
                                        <li>{memory}</li>
                                        <li>{hardDisk}</li>
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
                                                <td  className="name">Processor</td><td className="value">{processor}</td>
                                            </tr>
                                            <tr>
                                                <td  className="name">Memory</td><td className="value">{memory}<br />(Extra RAM slot available)</td>
                                            </tr>
                                            <tr>
                                                <td  className="name">Hard Disk</td><td className="value">{hardDisk}</td>
                                            </tr>
                                            <tr>
                                                <td  className="name">Motherboard</td><td className="value">{motherBoard}</td>
                                            </tr>
                                            <tr>
                                                <td  className="name">Monitor</td><td className="value">{monitor}</td>
                                            </tr>
                                            <tr>
                                                <td  className="name">Graphics</td><td className="value">{graphics}</td>
                                            </tr>
                                            <tr>
                                                <td  className="name">LAN</td><td className="value">{lan}</td>
                                            </tr>
                                            <tr>
                                                <td  className="name">Audio</td><td className="value">{audio}</td>
                                            </tr>
                                            <tr>
                                                <td  className="name">Optical Drive</td><td className="value">{drive}</td>
                                            </tr>
                                            <tr>
                                                <td  className="name">Mouse</td><td className="value">{mouse}</td>
                                            </tr>
                                            <tr>
                                                <td  className="name">Operating system</td><td className="value">{oparating}</td>
                                            </tr>
                                            <tr>
                                                <td  className="name">Keyboard</td><td className="value">{keyboard}</td>
                                            </tr>
                                            <tr>
                                                <td  className="name">Manufacturer Warranty</td><td className="value">{warranty}</td>
                                            </tr>                          
                                            </tbody>
                                                                    
                                            </table>
                                    </div>
                                    
                                    <div className="description" id="description">
                                        <h2>Description :</h2>
                                        <div  itemprop="description"><h1>{name}</h1><p>{name} comes with {processor}, {graphics}, {memory}, {hardDisk} and Intel 630 Graphics with Free DOS Operating System. {monitor} is included here. In this brand PC, Front: 1 headphone/microphone combo; 4 SuperSpeed USB 5Gbps signaling rate; 2 SuperSpeed USB 10Gbps signaling rateRear: 1 HDMI; 1 line in; 1 line out; 1 power connector; 1 RJ-45; 1, serial; 1 VGA; 2 USB 2.0 ports and connectors are available. Here, {audio} also included. This new Brand PC comes with {keyboard} and {mouse} and full Brand PC has {warranty}.</p></div>
                                    </div>
                            </div>
                            </div>
            </div>
        </div>
    );
};

export default DesktopAccessories;