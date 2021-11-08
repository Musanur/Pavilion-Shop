import React from 'react';
import './Laptop.css'
import { Link } from 'react-router-dom';

const LaptopCart = (props) => {
    const { img, name, price, key } = props.laptop
    return (
        <div>
            <div className="pt-1 ">
                <Link to={"/product/"+key}>
                    <div className="card_area text-center">
                    <div className="card-area">
                        <div className="card-img">
                            <img src={img} alt="" />
                        </div>
                        <div className="card-inner">
                            <a href>
                                <h6 className="text-center">{name}</h6>
                            </a>
                            <div className="card-custom d-flex justify-content-between align-items-center">
                                <a className="card-btn" href>
                                    <i className="fa fa-shopping-basket"></i>
                                    <span>Buy Now</span>
                                </a>
                                <span>{price}<span className="Price_icon">৳</span></span>
                            </div>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    );
};

export default LaptopCart;