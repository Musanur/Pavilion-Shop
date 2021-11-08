import React from 'react';
import '../Laptop/Laptop.css'
import { Link } from 'react-router-dom';

const InkTonerCard = (props) => {
        const { img, name, price, key } = props.toner
    return (
        <div>
            <div className="pt-1 ">
                <Link to={"/ink-toner/"+key}>
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

export default InkTonerCard;